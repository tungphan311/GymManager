import React, { Component } from "react";
import "./Login.scss";
import LoginForm from "pages/Login/LoginForm";
import { connect } from "react-redux";
import { LOGIN } from "state/reducers/authReducer";
import { getToken } from "utils/utils";

const mapDispatchToProps = dispatch => ({
  login: () => dispatch({ type: LOGIN })
});

class Login extends Component {
  componentDidMount = () => {
    if (getToken("identity")) {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="login__container">
        <div className="loginForm">
          <div className="illustration">
            <i className="fas fa-user-lock"></i>
          </div>

          <LoginForm onSubmit={this.props.login} />

          <a href="forgot-password" className="forgot">
            Forgot your email or password?
          </a>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);
