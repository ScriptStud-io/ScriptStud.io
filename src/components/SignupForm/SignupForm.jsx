import './SignupForm.css';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
    message: "",
  };

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  handleChange = (e) => {
    this.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      handleSignupOrLogin()
      history.push("/search/all");
    } catch (err) {
      this.updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
    <main className="LoginPage">
      <div className="mt-10 sm:mt-0">
        <div className="w-full">
          {/* <div className="md:col-span-1">
            
          </div> */}
          <div className="mb-10 md:mt-10 md:col-span-2">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                        Username
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="off"
                        value={name}
                        onChange={this.handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                   
                    
                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="off"
                        value={email}
                        onChange={this.handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    
       

                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={this.handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    
                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                      <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        autoComplete="off"
                        id="confirm"
                        value={passwordConf}
                        name="passwordConf"
                        onChange={this.handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    
            
          
                  </div>
                </div>
                    <div className="px-4 py-3 bg-gray-50 sm:px-6">
                      <button
                        disabled={this.isFormInvalid()}
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Sign Up
                      </button>
                      <Link to="/">
                      <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-6">Cancel</button>
                      </Link>
                   </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    );
  }
}

export default SignupForm;
