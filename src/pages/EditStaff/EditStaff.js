import React, { Component } from "react";
import AddStaffForm from "pages/AddStaff/AddStaffForm";
import "./EditStaff.scss";
import { connect } from "react-redux";
import { EDIT_STAFF, GET_STAFF } from "state/reducers/staffReducer";
import { getStaffSelector } from "state/selectors/index";

const mapStateToProps = state => ({
  staffdata: getStaffSelector(state)
});

const mapDispatchToProps = dispatch => ({
  editStaff: () => dispatch({ type: EDIT_STAFF }),
  getStaff: id => dispatch({ type: GET_STAFF, id })
});

class EditStaff extends Component {
  componentDidMount = () => {
    const {
      getStaff,
      match: {
        params: { id }
      }
    } = this.props;

    getStaff(id);
  };
  render() {
    const { staffdata } = this.props;

    return (
      <div className="addstaff">
        <h1
          className="text-center"
          style={{ padding: "20px 0", marginBottom: "24px" }}
        >
          CẬP NHẬT THÔNG TIN NHÂN VIÊN
        </h1>
        <AddStaffForm onSubmit={this.props.addStaff} staffdata={staffdata} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStaff);
