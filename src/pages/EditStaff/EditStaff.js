import React, { Component } from "react";
import AddStaffForm from "pages/AddStaff/AddStaffForm";
import "./EditStaff.scss";
import { connect } from "react-redux";
import {
  EDIT_STAFF,
  GET_STAFF_BY_ID,
  RESET_STAFF_DATA
} from "state/reducers/staffReducer";
import { getStaffSelector } from "state/selectors/index";

const mapStateToProps = state => ({
  staffdata: getStaffSelector(state)
});

const mapDispatchToProps = dispatch => ({
  editStaff: id => dispatch({ type: EDIT_STAFF, id }),
  getStaff: id => dispatch({ type: GET_STAFF_BY_ID, id }),
  resetStaffData: () => dispatch({ type: RESET_STAFF_DATA })
});

class EditStaff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0
    };
  }

  componentDidMount = () => {
    const {
      getStaff,
      match: {
        params: { id }
      }
    } = this.props;

    getStaff(id);
  };

  componentWillUnmount = () => {
    this.props.resetStaffData();
  };

  render() {
    const {
      staffdata,
      match: {
        params: { id }
      }
    } = this.props;

    if (id !== this.state.id) {
      this.setState({ id });
    }

    return (
      <div className="addstaff">
        <h1
          className="text-center"
          style={{ padding: "20px 0", marginBottom: "24px" }}
        >
          CẬP NHẬT THÔNG TIN NHÂN VIÊN
        </h1>
        <AddStaffForm
          type="edit"
          id={id}
          onSubmit={() => this.props.editStaff(id)}
          staffdata={staffdata}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStaff);
