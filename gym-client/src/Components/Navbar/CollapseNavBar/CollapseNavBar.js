import React from "react";
import Logo from "Components/Logo/Logo";

function CollapseNavBar() {
  return (
    <div className="logo-header" data-background-color="dark2">
      <Logo />
      <button
        className="navbar-toggler sidenav-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">
          <i className="icon-menu"></i>
        </span>
      </button>
      <button className="topbar-toggler more">
        <i className="icon-options-vertical"></i>
      </button>
      <div className="nav-toggle">
        <button className="btn btn-toggle toggle-sidebar">
          <i className="icon-menu"></i>
        </button>
      </div>
    </div>
  );
}

export default CollapseNavBar;
