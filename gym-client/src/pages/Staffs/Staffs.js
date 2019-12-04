import React from "react";
import "antd/dist/antd.css";
import "./Staffs.scss";
import TableItem from "Components/TableItem/TableItem";
import { Divider, Button, Pagination } from "antd";
import Highlighter from "react-highlight-words";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street"
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "3",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "4",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "5",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "6",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "7",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "8",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "9",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "10",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "11",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "12",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "13",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  },
  {
    key: "14",
    name: "John",
    age: 42,
    address: "10 Downing Street"
  }
];

class Staffs extends React.Component {
  state = {
    pagination: 10,
    selectedRowKeys: [],
    filteredInfo: null,
    sortedInfo: null
  };

  onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age"
      }
    });
  };

  selectRow = record => {
    const selectedRowKeys = [...this.state.selectedRowKeys];
    if (selectedRowKeys.indexOf(record.key) >= 0) {
      selectedRowKeys.splice(selectedRowKeys.indexOf(record.key), 1);
    } else {
      selectedRowKeys.push(record.key);
    }
    this.setState({ selectedRowKeys });
  };
  onSelectedRowKeysChange = selectedRowKeys => {
    this.setState({ selectedRowKeys });
    // alert(selectedRowKeys);
    //TODO: get selected row keys here
  };
  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectedRowKeysChange
    };
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        filters: [
          { text: "John", value: "John" },
          { text: "Jim", value: "Jim" }
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order,
        ellipsis: true
        // ...this.getColumnSearchProps("name")
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === "age" && sortedInfo.order,
        ellipsis: true
        // ...this.getColumnSearchProps("age")
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address",
        filters: [
          { text: "London", value: "London" },
          { text: "New York", value: "New York" }
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === "address" && sortedInfo.order,
        ellipsis: true
        // ...this.getColumnSearchProps("address")
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <a>Edit</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        )
      }
    ];

    return (
      <div className="staff__container">
        <Button onClick={this.setAgeSort}>Sort age</Button>
        <Button onClick={this.clearFilters}>Clear filters</Button>
        <Button onClick={this.clearAll}>Clear filters and sorters</Button>

        <TableItem
          rowSelection={rowSelection}
          dataSource={dataSource}
          columns={columns}
          onRow={record => ({
            onClick: () => {
              this.selectRow(record);
            }
          })}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Staffs;
