import React, { Component } from "react";
import AddEquipmentForm from "pages/AddEquipment/AddEquipmentForm";
import "./AddEquipment.scss";
import { connect } from "react-redux";
import { ADD_EQUIPMENT } from "state/reducers/equipmentReducer";

const mapDispatchToProps = dispatch => ({
  addEquipment: () => dispatch({ type: ADD_EQUIPMENT })
});

class AddEquipment extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="addequipment">
        <h1
          className="text-center"
          style={{ padding: "20px 0", marginBottom: "24px" }}
        >
          THÊM THIẾT BỊ MỚI
        </h1>
        <AddEquipmentForm
          type="add"
          history={history}
          onSubmit={this.props.addEquipment}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddEquipment);
