import './SignupPage.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';
import SideNav from '../../components/SideNav/SideNav';
import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

class SignupPage extends Component {
  state = {
    message: ''
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <main>
        <SignupForm {...this.props} updateMessage={this.updateMessage} />
        <p>{this.state.message}</p>
      </main>
    );
  }
}

export default SignupPage;