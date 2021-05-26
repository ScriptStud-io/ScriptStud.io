import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import authService from "../../services/authService"
import "./App.css";
import * as snippetAPI from '../../services/snippets-api'
import CreateSnippetPage from "../CreateSnippetPage/CreateSnippetPage";
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import CodeSnippetPage from '../CodeSnippetPage/CodeSnippetPage';
import EditSnippetPage from '../EditSnippetPage/EditSnippetPage';
import SearchResultsPage from '../SearchResultsPage/SearchResultsPage';
import SplashPage from '../SplashPage/SplashPage';

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
    }), () => this.props.history.push('/search/all'));
  }

  handleUpdateSnippet = async updatedSnippetData => {
    const updatedSnippet = await snippetAPI.update(updatedSnippetData);
    updatedSnippet.addedBy = {name: this.state.user.name, _id: this.state.user._id}
    const newSnippetsArray = this.state.snippets.map(m => 
      m._id === updatedSnippet._id ? updatedSnippet : m
    );
    this.setState(
      {snippets: newSnippetsArray},
      () => this.props.history.push('/search/all')
    );
  }
  
  render() {
    const {user} = this.state;

    return (
      <>
        <PageHeader user={user} handleLogout={this.handleLogout}  />

        <Route 
          exact path="/"
          render={({history}) => (
              <SplashPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
          )}
        />

        <Route 
          exact path='/snip/:snipid' 
          render={(props)=>
            <CodeSnippetPage {...props} 
            currentUser={this.state.user} 
            handleDeleteSnippet={this.handleDeleteSnippet} />}
        />

        {/* TODO: Marty do we need this switch router?   */}
        
        <Switch>
          <Route exact path='/search/all' render={()=><SearchResultsPage search='all' currentUser={this.state.user}/>}/>
          <Route exact path='/search/mysnips' render={()=><SearchResultsPage search='user' currentUser={this.state.user}/>}/>
          {/*TODO: main search sends selected tech as prop*/}
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
        <Route exact path='/snippets/create' render={() =>
          authService.getUser() ?
            <CreateSnippetPage
              handleAddSnippet={this.handleAddSnippet}
              user={user}
            />
            :
            <Redirect to='/login' />
        } />
        <Route  exact path='/snip/edit/:id'
                render={({match, location}) => 
                authService.getUser() ? 
                <EditSnippetPage  
                  user={user}
                  location={location}
                  match={match}
                  handleUpdateSnippet={this.handleUpdateSnippet}
                />
                :
                <Redirect to='/login' />
        }/>
        <PageFooter />
      </>
    );
  }
}

export default App;