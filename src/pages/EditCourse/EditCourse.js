import React, { Component } from "react";
import AddCourseForm from "pages/AddCourse/AddCourseForm";
import "./EditCourse.scss";
import { connect } from "react-redux";
import {
  EDIT_COURSE,
  GET_CLASS_BY_ID,
  RESET_COURSE_DATA
} from "state/reducers/courseReducer";
import { getClasseByIdSelector } from "state/selectors/index";

const mapStateToProps = state => ({
  coursedata: getClasseByIdSelector(state)
});

const mapDispatchToProps = dispatch => ({
  editCourse: id => dispatch({ type: EDIT_COURSE, id }),
  getCourse: id => dispatch({ type: GET_CLASS_BY_ID, id }),
  resetCourseData: () => dispatch({ type: RESET_COURSE_DATA })
});

class EditCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0
    };
  }
  componentDidMount = () => {
    const {
      getCourse,
      match: {
        params: { id }
      }
    } = this.props;

    getCourse(id);
  };

  componentWillUnmount = () => {
    this.props.resetCourseData();
  };

  render() {
    const {
      coursedata,
      match: {
        params: { id }
      }
    } = this.props;

    if (id !== this.state.id) {
      this.setState({ id });
    }

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
          onSubmit={() => this.props.editCourse(id)}
          coursedata={coursedata}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCourse);
