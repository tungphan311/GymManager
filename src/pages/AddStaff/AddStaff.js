import React, { Component } from "react";
import AddStaffForm from "pages/AddStaff/AddStaffForm";
import "./AddStaff.scss";
import { connect } from "react-redux";
import { ADD_STAFF } from "state/reducers/staffReducer";
// import LoadingScreen from "Components/LoadingScreen/LoadingScreen";

const mapDispatchToProps = dispatch => ({
  addStaff: () => dispatch({ type: ADD_STAFF })
});
class AddStaff extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="addstaff">
        <h1
          className="text-center"
          style={{ padding: "20px 0", marginBottom: "24px" }}
        >
          THÊM NHÂN VIÊN MỚI
        </h1>
        <AddStaffForm
          type="add"
          history={history}
          onSubmit={this.props.addStaff}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddStaff);
