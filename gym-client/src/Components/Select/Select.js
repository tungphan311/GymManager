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
}) => (
  <div>
    <label>{label}</label>
    <div>
      <select className="select">
        {selectlist.map(ele => (
          <option>{ele}</option>
        ))}
      </select>
    </div>
  </div>
);

export default Select;
