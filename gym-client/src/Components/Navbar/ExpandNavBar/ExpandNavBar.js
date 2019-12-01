/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import UserDropdown from "Components/Navbar/UserDropdown/UserDropdown";
import SearchForm from "Components/Navbar/SearchForm/SearchForm";
import Notification from "Components/Navbar/Notification/Notification";
import Shortcuts from "Components/Navbar/Shortcuts/Shortcuts";

function ExpandNavBar() {
  return (
    <nav
      className="navbar navbar-header navbar-expand-lg"
      data-background-color="dark"
    >
      <div className="container-fluid">
        <div className="collapse" id="search-nav">
          <SearchForm />
        </div>
        <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
          <li className="nav-item toggle-nav-search hidden-caret">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="#search-nav"
              role="button"
              aria-expanded="false"
              aria-controls="search-nav"
            >
              <i className="fa fa-search"></i>
            </a>
          </li>
          <Notification />
          <Shortcuts />
          <UserDropdown />
        </ul>
      </div>
    </nav>
  );
}

export default ExpandNavBar;
