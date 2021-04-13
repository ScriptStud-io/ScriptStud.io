import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import "./App.css";
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import SideNav from '../../components/SideNav/SideNav';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <NavBar user={this.state.user} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome. This is an authorization template.</h1>
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <SignupPage
              history={history}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <LoginPage
              history={history}
            />
          )}
        />
      </>
    );
  }
}

export default App;
