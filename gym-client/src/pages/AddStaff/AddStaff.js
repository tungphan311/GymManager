import React, { Component } from "react";
import AddStaffForm from "pages/AddStaff/AddStaffForm";
import { Provider } from "react-redux";
import "./AddStaff.scss";
import store from "./../../state/store";

class AddStaff extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Provider store={store}>
        <div className="addstaff">
          <h1 className="text-center">Add new Staff</h1>
          <AddStaffForm />
        </div>
      </Provider>
    );
  }
}

export default AddStaff;
