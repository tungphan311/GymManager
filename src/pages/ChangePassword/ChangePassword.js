import React, { Component } from "react";
import "./ChangePassword.scss";
import ChangePasswordForm from "pages/ChangePassword/ChangePasswordForm";

class ChangePassword extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="changePassword__container">
        <div className="changePasswordPage">
          <div className="illustration">
            <i className="fas fa-address-card"></i>
          </div>
          <ChangePasswordForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default ChangePassword;
