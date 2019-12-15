import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import "./Dropdown.scss";

const DropDownItem = ({ title, listItem }) => (
  <div className="dropdown__container">
    <MDBDropdown>
      <MDBDropdownToggle caret color="info">
        {title}
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <ul>
          {listItem.map(item => (
            <MDBDropdownItem href="#">{item}</MDBDropdownItem>
          ))}
        </ul>
      </MDBDropdownMenu>
    </MDBDropdown>
  </div>
);
// const listItems = numbers.map((number) =>
//     <li>{number}</li>
// );

export default DropDownItem;
