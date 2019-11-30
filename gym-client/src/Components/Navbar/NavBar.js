import React from "react";
import "./NavBar.scss";
import CollapseNavBar from "Components/Navbar/CollapseNavBar/CollapseNavBar";
import ExpandNavBar from "Components/Navbar/ExpandNavBar/ExpandNavBar";

function NavBar({ ava }) {
  return (
    <div className="main-header">
      <CollapseNavBar />
      <ExpandNavBar />
    </div>
  );
}

export default NavBar;
