import React from "react";
import "./Staffs.scss";
import TableItem from "Components/TableItem/TableItem";
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdbreact";
import DropDownITem from "Components/Dropdown/Dropdown";

const dataSource = [];
for (let i = 0; i < 100; i++) {
  dataSource.push({
    name: "Tiger Nixon " + i,
    position: "System Architect " + i,
    office: "Edinburgh " + i,
    age: "30" + i,
    date: "2011/04/25",
    salary: 30 * i,
    action: (
      <div className="button">
        <button className="btn btn-link btn-dark">
          <i className="fa fa-eye"></i>
        </button>
        <button className="btn btn-link btn-primary btn-lg">
          <i className="fa fa-edit"></i>
        </button>
        <button className="btn btn-link btn-danger">
          <i className="fa fa-times"></i>
        </button>
      </div>
    )
  });
}
class Staffs extends React.Component {
  state = {};
  listFilterItem = ["a", "b", "c", "d"];
  render() {
    const data = {
      columns: [
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 150
        },
        {
          label: "Position",
          field: "position",
          sort: "asc",
          width: 270
        },
        {
          label: "Office",
          field: "office",
          sort: "asc",
          width: 200
        },
        {
          label: "Age",
          field: "age",
          sort: "asc",
          width: 100
        },
        {
          label: "Start date",
          field: "date",
          sort: "asc",
          width: 150
        },
        {
          label: "Salary",
          field: "salary",
          sort: "asc",
          width: 100
        },
        {
          label: "Action",
          field: "action",
          width: 300
        }
      ],
      rows: dataSource
    };
    return (
      <div className="staff__container">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>
              <div className="title__container">
                <div className="title">List Of Staff</div>
                <div className="button_Add">
                  <button className="btn btn-primary">
                    <span className="btn-label">
                      <i className="fa fa-plus mr-2"></i>
                    </span>
                    Add Staff
                  </button>
                </div>
              </div>
            </MDBCardTitle>
            <div className="filter__container">
              <DropDownITem
                key={1}
                className="dropDownItem"
                title="Filter"
                listItem={this.listFilterItem}
              />
              <DropDownITem
                key={2}
                className="dropDownItem"
                title="Filter"
                listItem={this.listFilterItem}
              />
              <DropDownITem
                key={3}
                className="dropDownItem"
                title="Filter"
                listItem={this.listFilterItem}
              />
              <DropDownITem
                key={4}
                className="dropDownItem"
                title="Filter"
                listItem={this.listFilterItem}
              />
            </div>
            {/* <MDBCardText> */}
            <TableItem dataSource={data} />
            {/* </MDBCardText> */}
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default Staffs;
