import React, { Component } from "pages/AddMember/react";
import AddMemberForm from "pages/AddMember/pages/AddMember/AddMemberForm";
import "./AddMember.scss";
import { connect } from "pages/AddMember/react-redux";
import { ADD_MEMBER } from "pages/AddMember/state/reducers/memberReducer";
// import LoadingScreen from "Components/LoadingScreen/LoadingScreen";

const mapDispatchToProps = dispatch => ({
  addMember: () => dispatch({ type: ADD_MEMBER })
});
class AddMember extends Component {
  render() {
    return (
      <div className="addmember">
        <h1 className="text-center">THÊM HỘI VIÊN MỚI</h1>
        <AddMemberForm onSubmit={this.props.addMember} />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddMember);
