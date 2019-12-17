import React from "react";
import "./Select.scss";

// const Option = (selectlist = {}) =>(
//     for(int )
// )

const Select = ({
  className = "",
  label = "",
  meta = {}, //redux form
  input, //redux form
  selectlist = []
}) => {
  const { touched, error } = meta;

  const showError = touched && error;
  const { errCode } = error || {};
  return (
    <div className="input__container">
      <label>{label}</label>
      <div>
        <select {...input} className="select">
          {selectlist.map(({ value, label }) => (
            <option value={value}>{label}</option>
          ))}
        </select>
        <div>{showError && <span className="error">{errCode}</span>}</div>
      </div>
    </div>
  );
};

export default Select;
