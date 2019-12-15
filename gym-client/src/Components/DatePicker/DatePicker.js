import React from "react";
import ReactDatePicker from "react-date-picker";
import "./DatePicker.scss";

const DatePicker = ({
  label = "",
  type = "date",
  date,
  setDate,
  meta = {}, // redux form
  input // redux form
}) => {
  console.log(input);
  return (
    <div>
      <label>{label}</label>
      <div className="md__date--picker--container">
        <ReactDatePicker
          //{...input}
          value={date}
          onChange={date => console.log(date)}
        />
      </div>
    </div>
  );
};

export default DatePicker;
