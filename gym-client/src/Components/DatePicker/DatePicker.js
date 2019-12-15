import React, { Component } from "react";
import ReactDatePicker from "react-datepicker";
import "./DatePicker.scss";
import moment from "moment";

const CustomInput = React.forwardRef((props, ref) => {
  const { onClick, value } = props;
  return (
    <input onClick={onClick} value={value} type="text" readOnly ref={ref} />
  );
});

class DatePicker extends Component {
  render() {
    const { color = "blue", meta, input } = this.props;

    return (
      <div className={`md__date--picker--container ${color}`}>
        <ReactDatePicker
          customInput={<CustomInput />}
          selected={input.value || new Date()}
          onChange={input.onChange}
          dateFormat="dd/MM/yyyy"
        />
      </div>
    );
  }
}

export default DatePicker;
