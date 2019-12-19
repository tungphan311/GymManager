import React, { Component } from "react";
import AddEquipmentForm from "pages/AddEquipment/AddEquipmentForm";
import "./AddEquipment.scss";
import { connect } from "react-redux";
// import { ADD_EQUIPMENT } from "state/reducers/equipmentReducer";
// import LoadingScreen from "Components/LoadingScreen/LoadingScreen";

// const mapDispatchToProps = dispatch => ({
//   addEquipment: () => dispatch({ type: ADD_EQUIPMENT })
// });
class AddEquipment extends Component {
  render() {
    return (
      <div className="addequipment">
        <h1
          className="text-center"
          style={{ padding: "20px 0", marginBottom: "24px" }}
        >
          THÊM THIẾT BỊ MỚI
        </h1>
        <AddEquipmentForm onSubmit={this.props.addEquipment} />
      </div>
    );
  }
}

export default connect(null, null)(AddEquipment);
