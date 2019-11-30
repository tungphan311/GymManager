import React, { Component, useState } from "react";
import "./Login.scss";
import Input from "Components/Input/Input";
import LoginForm from "pages/Login/LoginForm";

class Login extends Component {
  render() {
    return (
      <div className="loginpage">
        <div class="illustration">
          <i class="icon ion-ios-locked-outline"></i>
        </div>

        <LoginForm />

        <a href="#" class="forgot">
          Forgot your email or password?
        </a>
      </div>
    );
  }
}

export default Login;
