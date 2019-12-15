import React from "react";
import NavBar from "Components/Navbar/NavBar";
import Sidebar from "Components/Sidebar/Sidebar";
import Footer from "Components/Footer/Footer";
import "./DefaultLayout.scss";

function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
      <NavBar />
      <Sidebar />
      <div className="main-panel">
        <div className="content">
          <div className="page-inner">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
