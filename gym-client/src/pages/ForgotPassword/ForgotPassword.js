import React, { Component } from "react";
import "./ForgotPassword.scss";
import ForgotPasswordForm from "pages/ForgotPassword/ForgotPasswordForm";

class ForgotPassword extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="forgotPasswordPage">
        <div className="illustration">
          <i className="fas fa-address-card"></i>
        </div>
        <ForgotPasswordForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default ForgotPassword;
