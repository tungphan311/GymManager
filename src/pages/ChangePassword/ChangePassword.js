import React, { Component } from "react";
import "./ChangePassword.scss";
import ChangePasswordForm from "pages/ChangePassword/ChangePasswordForm";
import { CHANGE_PASSWORD } from "state/reducers/authReducer";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  changePassword: () => dispatch({ type: CHANGE_PASSWORD })
});

class ChangePassword extends Component {
  render() {
    return (
      <div className="changePassword__container">
        <div className="changePasswordPage">
          <div className="illustration">
            <i className="fas fa-address-card"></i>
          </div>

          <ChangePasswordForm onSubmit={this.props.changePassword} />
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(ChangePassword);
