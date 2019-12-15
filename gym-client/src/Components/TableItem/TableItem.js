/* eslint-disable prettier/prettier */
import React from "react";
// import { Table } from "antd";
import { MDBDataTable } from "mdbreact";
import "./TableItem.scss";

const TableItem = ({ dataSource }) => (
  <div className="table__container">
    <MDBDataTable striped hover data={dataSource} />
  </div>
);

export default TableItem;
