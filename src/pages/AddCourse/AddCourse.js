import React, { Component } from "react";
import AddCourseForm from "pages/AddCourse/AddCourseForm";
import "./AddCourse.scss";
import { connect } from "react-redux";

class AddCourse extends Component {
  render() {
    return (
      <div className="addcourse">
        <h1 className="text-center">THÊM GÓI TẬP MỚI</h1>
        <AddCourseForm />
      </div>
    );
  }
}

export default connect(null, null)(AddCourse);
