import React, { Component } from "react";
import AddEquipmentForm from "pages/AddEquipment/AddEquipmentForm";
import "./EditEquipment.scss";
import { connect } from "react-redux";
import {
  EDIT_EQUIPMENT,
  GET_EQUIPMENT_BY_ID,
  RESET_EQUIPMENT_DATA
} from "state/reducers/equipmentReducer";
import { getEquipmentSelector } from "state/selectors/index";

const mapStateToProps = state => ({
  equipmentdata: getEquipmentSelector(state)
});

const mapDispatchToProps = dispatch => ({
  editEquipment: id => dispatch({ type: EDIT_EQUIPMENT, id }),
  getEquipment: id => dispatch({ type: GET_EQUIPMENT_BY_ID, id }),
  resetEquipmentData: () => dispatch({ type: RESET_EQUIPMENT_DATA })
});

class EditEquipment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0
    };
  }

  componentDidMount = () => {
    const {
      getEquipment,
      match: {
        params: { id }
      }
    } = this.props;

    getEquipment(id);
  };

  componentWillUnmount = () => {
    this.props.resetEquipmentData();
  };

  render() {
    const {
      history,
      equipmentdata,
      match: {
        params: { id }
      }
    } = this.props;

    if (id !== this.state.id) {
      this.setState({ id });
    }

    return (
      <div className="addequipment">
        <h1
          className="text-center"
          style={{ padding: "20px 0", marginBottom: "24px" }}
        >
          CẬP NHẬT THÔNG TIN THIẾT BỊ
        </h1>
        <AddEquipmentForm
          type="edit"
          id={id}
          history={history}
          onSubmit={() => this.props.editEquipment(id)}
          equipmentdata={equipmentdata}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEquipment);
