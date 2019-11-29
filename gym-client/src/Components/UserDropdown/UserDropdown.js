import React from "react";

function UserDropdown() {
  return (
    <div className="dropdown-user-scroll scrollbar-outer">
      <li>
        <div className="user-box">
          <div className="avatar-lg">
            <img
              src="/assets/img/profile.jpg"
              alt="image profile"
              className="avatar-img rounded"
            />
          </div>
          <div className="u-text">
            <h4>Hizrian</h4>
            <p className="text-muted">hello@example.com</p>
            <a href="#" className="btn btn-xs btn-secondary btn-sm">
              View Profile
            </a>
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
        <a className="dropdown-item" href="#">
          Logout
        </a>
      </li>
    </div>
  );
}

export default UserDropdown;
