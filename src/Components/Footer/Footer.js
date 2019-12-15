/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <nav className="pull-left">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/tungphan311/GymManager"
                target="_blank"
              >
                Source
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/tungphan311/GymManager/blob/master/gym-client/docs/read-me.md"
                target="_blank"
              >
                Document
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright ml-auto">
          2019, made with <i className="fa fa-heart heart text-danger"></i> by{" "}
          <a href="#">UIT - PMCL2016</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
