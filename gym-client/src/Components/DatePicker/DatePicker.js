import React, { Component } from "react";
import ReactDatePicker from "react-datepicker";
import "./DatePicker.scss";

const CustomInput = React.forwardRef((props, ref) => {
  const { onClick, value } = props;
  return (
    <input onClick={onClick} value={value} type="text" readOnly ref={ref} />
  );
});

class DatePicker extends Component {
  render() {
    const { startDate, setStartDate, placeholder, color } = this.props;
    return (
      <div className={`md__date--picker--container ${color}`}>
        <ReactDatePicker
          customInput={<CustomInput />}
          selected={startDate}
          onChange={date => setStartDate(date)}
          monthsShown={2}
          dateFormat="dd/MM/yyyy"
          placeholderText={placeholder}
          disabledKeyboardNavigation
        />
      </div>
    );
  }
}

export default DatePicker;
