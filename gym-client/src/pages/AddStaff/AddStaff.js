import React, { Component } from "react";
import AddStaffForm from "pages/AddStaff/AddStaffForm";
import "./AddStaff.scss";

class AddStaff extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="addstaff">
        <h1 className="text-center">Add new Staff</h1>
        <AddStaffForm />
      </div>
    );
  }
}

export default AddStaff;
