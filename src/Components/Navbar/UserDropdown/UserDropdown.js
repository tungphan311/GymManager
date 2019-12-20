/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { LOGOUT } from "state/reducers/authReducer";
import { connect } from "react-redux";
import {
  getStaffNameSelector,
  getStaffUsernameSelector
} from "state/selectors/index";

const mapStateToProps = state => ({
  name: getStaffNameSelector(state),
  username: getStaffUsernameSelector(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: LOGOUT })
});

function UserDropdown({
  ava = "/assets/img/profile.png",
  logout,
  name,
  username
}) {
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
                <img src={ava} alt="profile" className="avatar-img rounded" />
              </div>
              <div className="u-text">
                <h4>{name}</h4>
                <p className="text-muted">{username}</p>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              Tài khoản của tôi
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="change-password">
              Đổi mật khẩu
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#" onClick={logout}>
              Đăng xuất
            </a>
          </li>
        </div>
      </ul>
    </li>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
