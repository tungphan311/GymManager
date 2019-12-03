import React, { Component } from "react";
import ReactDatePicker from "react-date-picker";
import "./DatePicker.scss";

class DatePicker extends Component {
  render() {
    const { date, setDate } = this.props;
    return (
      <div className="md__date--picker--container">
        <ReactDatePicker value={date} onChange={setDate} />
      </div>
    );
  }
}

export default DatePicker;
