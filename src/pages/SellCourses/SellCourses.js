/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./SellCourses.scss";
import Section from "Components/Section/Section";

function SellCourses() {
  return (
    <div className="sellcourses__container">
      <div className="page-header">
        <ul className="breadcrumbs">
          <li className="nav-home">
            <i className="flaticon-home" />
          </li>
          <li className="separator">
            <i className="flaticon-right-arrow" />
          </li>
          <li className="nav-item submenu">
            <a href="#">Đăng ký gói tập</a>
          </li>
        </ul>
      </div>

      <Section />
    </div>
  );
}

export default SellCourses;
