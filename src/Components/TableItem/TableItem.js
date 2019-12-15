import React from "react";
import { MDBDataTable } from "mdbreact";

const TableItem = ({ dataSource }) => (
  <div className="table__container">
    <MDBDataTable striped hover autowidth={false} data={dataSource} />
  </div>
);

export default TableItem;
