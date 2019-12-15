import React, { Component } from "react";
import "./Login.scss";
import LoginForm from "pages/Login/LoginForm";

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="login__container">
        <div className="loginForm">
          <div className="illustration">
            <i className="fas fa-user-lock"></i>
          </div>

          <LoginForm onSubmit={this.handleSubmit} />

          <a href="forgot-password" className="forgot">
            Forgot your email or password?
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
