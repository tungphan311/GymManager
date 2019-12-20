import React, { Component } from "react";
import AddCourseForm from "pages/AddCourse/AddCourseForm";
import "./EditCourse.scss";
import { connect } from "react-redux";
import { EDIT_COURSE, GET_CLASS_BY_ID } from "state/reducers/courseReducer";
import { getClasseByIdSelector } from "state/selectors/index";

const mapStateToProps = state => ({
  coursedata: getClasseByIdSelector(state)
});

const mapDispatchToProps = dispatch => ({
  editCourse: id => dispatch({ type: EDIT_COURSE, id }),
  getCourse: id => dispatch({ type: GET_CLASS_BY_ID, id })
});

class EditCourse extends Component {
  componentDidMount = () => {
    const {
      getCourse,
      match: {
        params: { id }
      }
    } = this.props;

    getCourse(id);
  };
  render() {
    const { coursedata } = this.props;

    return (
      <div className="addcourse">
        <h1
          className="text-center"
          style={{ padding: "20px 0", marginBottom: "24px" }}
        >
          CẬP NHẬT THÔNG TIN HỘI VIÊN
        </h1>
        <AddCourseForm
          type="edit"
          onSubmit={this.props.editCourse}
          coursedata={coursedata}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCourse);
