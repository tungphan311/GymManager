/* eslint-disable prettier/prettier */
import React from "react";
import { Table } from "antd";
import "./TableItem.scss";

const TableItem = ({ dataSource, columns, rowSelection, onRow, onChange }) => (
  <div className="table__container">
    <Table
      dataSource={dataSource}
      columns={columns}
      rowSelection={rowSelection}
      onRow={onRow}
      onChange={onChange}
      scroll={{ y: 480 }}
      pagination={{
        pageSizeOptions: ["10", "20", "50", "100"],
        showSizeChanger: true
      }}
    />
  </div>
);

export default TableItem;
