import React from "react";
import ReactDatePicker from "react-date-picker";
import "./DatePicker.scss";

const DatePicker = ({
  label = "",
  type = "date",
  date = "",
  setDate = "",
  meta = {}, // redux form
  input // redux form
}) => {
  const { touched, error } = meta;

  const showError = touched && error;
  const { errCode } = error || {};
  // const { date, setDate, label } = this.props;

  return (
    <div>
      <label>{label}</label>
      <div className="md__date--picker--container">
        <ReactDatePicker {...input} value={date} onChange={setDate} />
      </div>
    </div>
  );
};

export default DatePicker;
