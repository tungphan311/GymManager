import "./Courses.scss";
import React from "react";
import TableItem from "Components/TableItem/TableItem";
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdbreact";
import { connect } from "react-redux";
import history from "state/history";
import { GET_COURSE, DELETE_COURSE } from "state/reducers/courseReducer";
import { getCoursesSelector } from "state/selectors/courseSelector";
import { formatDuration, setCourseType } from "utils/utils";

const mapDispatchToProps = dispatch => ({
  getAllCourse: () => dispatch({ type: GET_COURSE }),
  deleteCourse: courseID => dispatch({ type: DELETE_COURSE, courseID })
  // getStaff: id => dispatch({ type: GET_STAFF_BY_ID, id })
});

const mapStatetoProps = state => ({
  courses: getCoursesSelector(state)
  // staff: getStaffNameSelector(state)
});

class Courses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //TODO:
    };
  }

  componentDidMount = () => {
    this.props.getAllCourse();
  };

  formatCourses(listOfCourses) {
    const NewList = listOfCourses.map(item => {
      const newCourseItem = {
        ...item,
        DurationDays: formatDuration(item.DurationDays),
        ClassTypeID: setCourseType(item.ClassTypeID),
        // courseID: this.getStaff(item.courseID),
        Action: (
          <div className="button">
            <button className="btn btn-link btn-dark">
              <i className="fa fa-eye"></i>
            </button>
            <button
              className="btn btn-link btn-primary btn-lg"
              onClick={() => history.push("courses/edit/" + item.ID)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="btn btn-link btn-danger"
              onClick={() => this.deleteCourse(item.ID)}
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
        )
      };
      return newCourseItem;
    });
    return NewList;
  }
  deleteCourse(courseID) {
    this.props.deleteCourse(courseID);
  }

  render() {
    let courses = this.props.courses;
    courses = this.formatCourses(courses);

    const data = {
      columns: [
        {
          label: "Tên gói tập",
          field: "Name",
          sort: "asc"
          // width: 600
        },

        {
          label: "Loại gói tập",
          field: "ClassTypeID"
          // width: 200
        },
        {
          label: "Trị giá",
          field: "Price"
          // width: 100
        },
        {
          label: "Hạn khoá học",
          field: "DurationDays"
          // width: 100
        },
        {
          label: "Công cụ",
          field: "Action"
          // width: 100
        }
      ],
      rows: courses
    };
    return (
      <div className="courses__container">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>
              <div className="title__container">
                <div className="title">Danh sách gói tập</div>
                <div className="button_Add">
                  <button
                    className="btn btn-primary"
                    onClick={() => history.push("/courses/add")}
                  >
                    <span className="btn-label">
                      <i className="fa fa-plus mr-2"></i>
                    </span>
                    Thêm gói tập
                  </button>
                </div>
              </div>
            </MDBCardTitle>
            <div className="filter__container"></div>
            {/* <MDBCardText> */}
            <TableItem dataSource={data} />
            {/* </MDBCardText> */}
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Courses);
