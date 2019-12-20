import { ROLE } from "constants/role";
import { GENDERS, TYPE } from "constants/index";

import React from "react";
import "./Staffs.scss";
import TableItem from "Components/TableItem/TableItem";
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdbreact";
import {
  GET_STAFF,
  DELETE_STAFF,
  FILTER_STAFF
} from "state/reducers/staffReducer";
import { getStaffsSelector } from "state/selectors/staffSelector";
import { connect } from "react-redux";
import { formatGender, setStaffType, setRole, formatDate } from "utils/utils";
import history from "state/history";
import Select from "Components/Select/Select";
import FilterSelector from "Components/FilterSelector/FilterSelector";

const mapDispatchToProps = dispatch => ({
  getAllStaff: () => dispatch({ type: GET_STAFF }),
  deleteStaff: staffID => dispatch({ type: DELETE_STAFF, staffID }),
  filterStaff: (gender, roleid, stafftypeid) =>
    dispatch({ type: FILTER_STAFF, gender, roleid, stafftypeid })
});

const mapStatetoProps = state => ({
  staffs: getStaffsSelector(state)
});

class Staffs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: 0,
      roleid: 0,
      stafftypeid: 0
    };
  }

  componentDidMount = () => {
    this.props.getAllStaff();
  };

  formatStaff(listOfStaffs) {
    const NewList = listOfStaffs.map(item => {
      const newStaffItems = {
        ...item,
        Gender: formatGender(item.Gender),
        RoleID: setRole(item.RoleID),
        StaffTypeID: setStaffType(item.StaffTypeID),
        BeginDay: formatDate(item.BeginDay),
        Action: (
          <div className="button">
            <button className="btn btn-link btn-dark">
              <i className="fa fa-eye"></i>
            </button>
            <button
              className="btn btn-link btn-primary btn-lg"
              onClick={() => history.push("/staffs/edit/" + item.ID)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="btn btn-link btn-danger"
              onClick={() => this.deleteStaff(item.ID)}
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
        )
      };
      return newStaffItems;
    });
    return NewList;
  }

  deleteStaff(staffID) {
    this.props.deleteStaff(staffID);
  }
  _handleChange = event => {
    let { name, value } = event.target;

    this.setState(
      {
        [name]: parseInt(value)
      },
      () => {
        const { gender, roleid, stafftypeid } = this.state;
        this.props.filterStaff(gender, roleid, stafftypeid);
      }
    );
  };

  render() {
    let staffs = this.props.staffs;
    if (staffs.length > 0) {
      staffs = this.formatStaff(staffs);
    }

    const data = {
      columns: [
        {
          label: "Họ và tên",
          field: "FullName",
          sort: "asc"
          // width: 600
        },
        {
          label: "Vai trò",
          field: "RoleID",
          sort: "asc"
          // width: 150
        },
        {
          label: "Loại nhân viên",
          field: "StaffTypeID"
          // width: 200
        },
        {
          label: "Ngày vào làm",
          field: "BeginDay"
          // width: 100
        },
        {
          label: "Giới tính",
          field: "Gender"
          // width: 100
        },
        {
          label: "Công cụ",
          field: "Action"
          // width: 100
        }
      ],
      rows: staffs
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
              <FilterSelector
                className="selectRole"
                selectlist={ROLE}
                selectName="roleid"
                onChange={this._handleChange}
              />
              <FilterSelector
                className="selectGender"
                selectName="gender"
                selectlist={GENDERS}
                onChange={this._handleChange}
              />
              <FilterSelector
                className="selectType"
                selectlist={TYPE}
                selectName="stafftypeid"
                onChange={this._handleChange}
              />
            </div>
            <TableItem dataSource={data} />
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Staffs);
