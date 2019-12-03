import React, { Component } from "react";
import AddStaffForm from "pages/AddStaff/AddStaffForm";
import "./AddStaff.scss";
import DatePicker from "Components/DatePicker/DatePicker";

class AddStaff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: null
    };
  }
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { startDate } = this.state;
    return (
      <div className="addstaff">
        <h1 className="text-center">Add new Staff</h1>
        <AddStaffForm />
        <DatePicker
          // component={DatePicker}
          startDate={startDate}
          name="Birth"
          color="red"
          setStartDate={date => this.setState({ startDate: date })}
        />
      </div>
    );
  }
}

export default AddStaff;
