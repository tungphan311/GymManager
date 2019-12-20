import { DEVICESTATUS } from "constants/deviceStatus";
import React from "react";
import "./Equipments.scss";
import {
  GET_EQUIPMENT,
  DELETE_EQUIPMENT,
  FILTER_EQUIPMENT
} from "state/reducers/equipmentReducer";

import { getAllEquipmentSaga } from "state/sagas/equipmentSaga";
import { getEquipmentSelector } from "state/selectors/equipmentSelector";
import history from "state/history";
import TableItem from "Components/TableItem/TableItem";
import { connect } from "react-redux";
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdbreact";
import { setEquipmentStatus } from "utils/utils";
import { GET_EQUIPMENT_TYPE } from "state/reducers/equipmentTypeReducer";
import { getEquipmentTypeSelector } from "state/selectors/equipmentTypeSelector";
import FilterSelector from "Components/FilterSelector/FilterSelector";

const mapDispatchToProps = dispatch => ({
  getAllEquipment: () => dispatch({ type: GET_EQUIPMENT }),
  deleteEquipment: equipmentID =>
    dispatch({ type: DELETE_EQUIPMENT, equipmentID }),
  getAllEquipmentType: () => dispatch({ type: GET_EQUIPMENT_TYPE }),
  filterDevice: (devicestatusid, devicetypeid) =>
    dispatch({ type: FILTER_EQUIPMENT, devicestatusid, devicetypeid })
});

const mapStateToProps = state => ({
  equipments: getEquipmentSelector(state),
  equipmentTypes: getEquipmentTypeSelector(state)
});

class Equipment extends React.Component {
  constructor(props) {
    super(props);

    this.state = { devicestatusid: 0, devicetypeid: 0 };
  }

  componentDidMount = () => {
    this.props.getAllEquipment();
    this.props.getAllEquipmentType();
  };

  formatEquipments(listOfEquipments) {
    const NewList = listOfEquipments.map(item => {
      const newCourseItem = {
        ...item,
        DeviceStatusID: setEquipmentStatus(item.DeviceStatusID),
        Action: (
          <div className="button">
            <button className="btn btn-link btn-dark">
              <i className="fa fa-eye"></i>
            </button>
            <button
              className="btn btn-link btn-primary btn-lg"
              onClick={() => history.push("equipments/edit/" + item.ID)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="btn btn-link btn-danger"
              onClick={() => this.deleteEquipment(item.ID)}
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
        )
      };
      return newCourseItem;
    });
    return NewList;
  }
  deleteEquipment(equipmentID) {
    this.props.deleteEquipment(equipmentID);
  }
  _handleChange = event => {
    let { name, value } = event.target;

    this.setState(
      {
        [name]: parseInt(value)
      },
      () => {
        const { devicestatusid, devicetypeid } = this.state;
        console.log(devicestatusid);
        console.log(devicetypeid);
        this.props.filterDevice(devicestatusid, devicetypeid);
      }
    );
  };

  render() {
    let equipments = this.props.equipments;
    const equipmentTypes = this.props.equipmentTypes;
    let DefaultList = { value: 0, label: "Vui lòng chọn loại thiết bị" };
    let TypeList = equipmentTypes.map(item => ({
      value: parseInt(item.ID),
      label: item.Name
    }));
    TypeList.unshift(DefaultList);

    equipments = this.formatEquipments(equipments);

    const data = {
      columns: [
        {
          label: "Tên thiết bị",
          field: "Name",
          sort: "asc"
          // width: 600
        },

        {
          label: "Loại thiết bị",
          field: "DevicetypeID"
          // width: 200
        },
        {
          label: "Tình trạng",
          field: "DeviceStatusID"
          // width: 100
        },
        {
          label: "Ghi chú",
          field: "Description"
          // width: 100
        },
        {
          label: "Công cụ",
          field: "Action"
          // width: 100
        }
      ],
      rows: equipments
    };
    return (
      <div className="equipment__container">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>
              <div className="title__container">
                <div className="title">Danh sách thiết bị</div>
                <div className="button_Add">
                  <button className="btn btn-primary">
                    <span className="btn-label">
                      <i className="fa fa-plus mr-2"></i>
                    </span>
                    Thêm mới thiết bị
                  </button>
                </div>
              </div>
            </MDBCardTitle>

            <div className="filter__container">
              <FilterSelector
                className="selectDeviceStatus"
                selectName="devicestatusid"
                selectlist={DEVICESTATUS}
                onChange={this._handleChange}
              />
              <FilterSelector
                className="selectDevicetype"
                selectlist={TypeList}
                selectName="devicetypeid"
                onChange={this._handleChange}
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

export default connect(mapStateToProps, mapDispatchToProps)(Equipment);
