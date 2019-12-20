import React, { Component } from "react";
import AddCourseForm from "pages/AddCourse/AddCourseForm";
import "./AddCourse.scss";
import { connect } from "react-redux";
import { ADD_COURSE } from "state/reducers/courseReducer";

const mapDispatchToProps = dispatch => ({
  addCourse: () => dispatch({ type: ADD_COURSE })
});

class AddCourse extends Component {
  render() {
    return (
      <div className="addcourse">
        <h1 className="text-center">THÊM GÓI TẬP MỚI</h1>
        <AddCourseForm type="add" onSubmit={this.props.addCourse} />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddCourse);
