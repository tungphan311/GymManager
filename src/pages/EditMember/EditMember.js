import React, { Component } from "react";
import AddMemberForm from "pages/AddMember/AddMemberForm";
import "./EditMember.scss";
import { connect } from "react-redux";
import { EDIT_MEMBER, GET_MEMBER_BY_ID } from "state/reducers/memberReducer";
import { getMemberSelector } from "state/selectors/index";

const mapStateToProps = state => ({
  memberdata: getMemberSelector(state)
});

const mapDispatchToProps = dispatch => ({
  editMember: id => dispatch({ type: EDIT_MEMBER, id }),
  getMember: id => dispatch({ type: GET_MEMBER_BY_ID, id })
});

class EditMember extends Component {
  componentDidMount = () => {
    const {
      getMember,
      match: {
        params: { id }
      }
    } = this.props;

    getMember(id);
  };
  render() {
    const { memberdata } = this.props;

    return (
      <div className="addmember">
        <h1
          className="text-center"
          style={{ padding: "20px 0", marginBottom: "24px" }}
        >
          CẬP NHẬT THÔNG TIN HỘI VIÊN
        </h1>
        <AddMemberForm
          type="edit"
          onSubmit={this.props.editMember}
          memberdata={memberdata}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMember);
