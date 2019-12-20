/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { LOGOUT } from "state/reducers/authReducer";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: LOGOUT })
});

function UserDropdown({ ava = "/assets/img/profile.jpg", logout }) {
  return (
    <li className="nav-item dropdown hidden-caret">
      <a
        className="dropdown-toggle profile-pic"
        data-toggle="dropdown"
        href="#"
        aria-expanded="false"
      >
        <div className="avatar-sm">
          <img src={ava} alt="avatar" className="avatar-img rounded-circle" />
        </div>
      </a>
      <ul className="dropdown-menu dropdown-user animated fadeIn">
        <div className="dropdown-user-scroll scrollbar-outer">
          <li>
            <div className="user-box">
              <div className="avatar-lg">
                <img
                  src="/assets/img/profile.jpg"
                  alt="profile"
                  className="avatar-img rounded"
                />
              </div>
              <div className="u-text">
                <h4>Hizrian</h4>
                <p className="text-muted">hello@example.com</p>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              My Profile
            </a>
            <a className="dropdown-item" href="#">
              My Balance
            </a>
            <a className="dropdown-item" href="#">
              Inbox
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              Account Setting
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#" onClick={logout}>
              Logout
            </a>
          </li>
        </div>
      </ul>
    </li>
  );
}

export default connect(null, mapDispatchToProps)(UserDropdown);
