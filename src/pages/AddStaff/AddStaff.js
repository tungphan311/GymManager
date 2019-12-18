import React, { Component } from "react";
import AddStaffForm from "pages/AddStaff/AddStaffForm";
import "./AddStaff.scss";

class AddStaff extends Component {
  handleSubmit = e => {
    // e.preventDefault();
  };

  render() {
    return (
      <div className="addstaff">
        <h1 className="text-center">THÊM NHÂN VIÊN MỚI</h1>
        <AddStaffForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default AddStaff;
