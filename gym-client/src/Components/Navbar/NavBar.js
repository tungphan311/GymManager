import React from "react";
import "./NavBar.scss";
import Search from "../Search/Search";

function NavBar() {
  return (
    <div className="navbar__container">
      <Search />
    </div>
  );
}

export default NavBar;
