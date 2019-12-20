import React, { Component } from "react";
import AddMemberForm from "pages/AddMember/AddMemberForm";
import "./AddMember.scss";
import { connect } from "react-redux";
import { ADD_MEMBER } from "state/reducers/memberReducer";
import { getStaffId } from "state/selectors/index";
// import LoadingScreen from "Components/LoadingScreen/LoadingScreen";

const mapDispatchToProps = dispatch => ({
  addMember: () => dispatch({ type: ADD_MEMBER })
});

const mapStateToProps = state => ({
  staffid: getStaffId(state)
});
class AddMember extends Component {
  render() {
    return (
      <div className="addmember">
        <h1 className="text-center">THÊM HỘI VIÊN MỚI</h1>
        <AddMemberForm tyep="add" onSubmit={this.props.addMember} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMember);
