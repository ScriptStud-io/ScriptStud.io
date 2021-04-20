import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import Users from "../Users/Users"
import authService from "../../services/authService"
import "./App.css";
import * as snippetAPI from '../../services/snippets-api'
import CreateSnippetPage from "../CreateSnippetPage/CreateSnippetPage";
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import SideNav from '../../components/SideNav/SideNav';
import CodeSnippetPage from '../CodeSnippetPage/CodeSnippetPage';
import EditSnippetPage from '../EditSnippetPage/EditSnippetPage';
import SearchResultsPage from '../SearchResultsPage/SearchResultsPage';

class App extends Component {
  state = {
    snippets: [],
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() })
  }

  handleAddSnippet = async newSnippetData => {
    const newSnippet = await snippetAPI.create(newSnippetData);
    newSnippet.addedBy = { name: this.state.user.name, _id: this.state.user._id }
    this.setState(state => ({
      snippets: [...state.snippets, newSnippet]
    }), () => this.props.history.push('/snippets'));
  }

  handleDeleteSnippet = async id => {
    if(authService.getUser()){
      await snippetAPI.deleteOne(id);
      this.setState(state => ({
        snippets: state.snippets.filter(m => m._id !== id)
      }), () => this.props.history.push('/snippets'));
    } else {
      this.props.history.push('/login')
    }
  }

  handleUpdateSnippet = async updatedSnippetData => {
    const updatedSnippet = await snippetAPI.update(updatedSnippetData);
    updatedSnippet.addedBy = {name: this.state.user.name, _id: this.state.user._id}
    const newSnippetsArray = this.state.snippets.map(m => 
      m._id === updatedSnippet._id ? updatedSnippet : m
    );
    this.setState(
      {snippets: newSnippetsArray},
      () => this.props.history.push('/snippets')
    );
  }
  
  async componentDidMount() {
    const snippets = await snippetAPI.getAll();
    this.setState({snippets})
  }

  render() {
    const {user} = this.state
    return (
      <>
        <PageHeader user={this.state.user} handleLogout={this.handleLogout}  />
        {/* <NavBar user={this.state.user} handleLogout={this.handleLogout} /> */}
        <Route  exact path="/"
                render={() => (
            <main>
              <h1>Welcome. This is an authorization template for Script Stud.io</h1>
            </main>
          )}
        />
        <Switch>
          <Route 	exact path='/snip' 
                  render={(props)=><CodeSnippetPage {...props} />} 
          />
          <Route 	exact path='/snip/:snipid' 
                  render={(props)=><CodeSnippetPage {...props} />} 
          />
        </Switch>
        <Switch>
          <Route  exact path='/search/all'
                  render={()=><SearchResultsPage />}
          />
        </Switch>
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        {/* unused route atm */}
        <Route 
          exact
          path="/users"
          render={({ history}) =>
            user ? <Users /> : <Redirect to="/login" />
          }
        />
        <Route exact path='/snippets/create' render={() =>
          authService.getUser() ?
            <CreateSnippetPage
              handleAddSnippet={this.handleAddSnippet}
              user={this.state.user}
            />
            :
            <Redirect to='/login' />
        } />
        <Route path='/snippet/edit' render={({location})=>
          authService.getUser() ?
          <EditSnippetPage
            user={this.state.user}
            location={location}
            handleUpdateSnippet={this.handleUpdateSnippet}
          />
          :
          <Redirect to='/login' />
        }/>
        <Route path='/search' render={()=>
        
          <SearchResultsPage />}
        />
        <PageFooter />
      </>
    );
  }
}

export default App;



{/*
<Route 	path='/new-snip' 
    render={()=><CreateSnippetPage />}
/>*/}



