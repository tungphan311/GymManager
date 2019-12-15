import React, { Component } from "react";
import "./ForgotPassword.scss";
import ForgotPasswordForm from "pages/ForgotPassword/ForgotPasswordForm";

class ForgotPassword extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="forgotPassword__container">
        <div className="forgotPasswordPage">
          <div className="illustration">
            <i className="fas fa-address-card"></i>
          </div>
          <ForgotPasswordForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
