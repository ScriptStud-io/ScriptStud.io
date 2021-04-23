import './SignupPage.css';
import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

class SignupPage extends Component {
  state = {
    message: ''
  }

  

  render() {
    return (
      <main>

        <SignupForm {...this.props} />


        <p>{this.state.message}</p>
      </main>
    );
  }
}

export default SignupPage;