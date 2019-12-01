import React, { Component } from "react";
import "./Login.scss";
import LoginForm from "pages/Login/LoginForm";

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="loginpage">
        <div className="illustration">
          <i className="icon ion-ios-locked-outline"></i>
        </div>

        <LoginForm onSubmit={this.handleSubmit} />

        <a href="#" className="forgot">
          Forgot your email or password?
        </a>
      </div>
    );
  }
}

export default Login;
