import React, { Component } from "react";
import AddMemberForm from "pages/AddMember/AddMemberForm";
import "./EditMember.scss";
import { connect } from "react-redux";
import {
  EDIT_MEMBER,
  GET_MEMBER_BY_ID,
  RESET_MEMBER_DATA
} from "state/reducers/memberReducer";
import { getMemberSelector } from "state/selectors/index";

const mapStateToProps = state => ({
  memberdata: getMemberSelector(state)
});

const mapDispatchToProps = dispatch => ({
  editMember: id => dispatch({ type: EDIT_MEMBER, id }),
  getMember: id => dispatch({ type: GET_MEMBER_BY_ID, id }),
  resetStaffData: () => dispatch({ type: RESET_MEMBER_DATA })
});

class EditMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0
    };
  }

  componentDidMount = () => {
    const {
      getMember,
      match: {
        params: { id }
      }
    } = this.props;

    getMember(id);
  };

  componentWillUnmount = () => {
    this.props.resetStaffData();
  };

  render() {
    const {
      memberdata,
      match: {
        params: { id }
      }
    } = this.props;

    if (id !== this.state.id) {
      this.setState({ id });
    }
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
          onSubmit={() => this.props.editMember(id)}
          memberdata={memberdata}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMember);
