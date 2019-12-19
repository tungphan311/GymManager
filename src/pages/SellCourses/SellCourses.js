/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./SellCourses.scss";
import Section from "Components/Section/Section";
import { connect } from "react-redux";
import { TOGGLE_MODAL } from "state/reducers/modalReducer";
import { getModalSelector } from "state/selectors/modalSelector";
import SellCourseModal from "pages/SellCourses/SellCourseModal";

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch({ type: TOGGLE_MODAL })
});

const mapStateToProps = state => ({
  isOpen: getModalSelector(state)
});

function SellCourses({ isOpen, toggleModal }) {
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

      <SellCourseModal isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SellCourses);
