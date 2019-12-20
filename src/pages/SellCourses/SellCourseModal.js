import React, { Component } from "react";
import Modal from "Components/Modal/Modal";
import SelectWithInput from "Components/SelectWithInput/SelectWithInput";
import { GET_MEMBER } from "state/reducers/memberReducer";
import { connect } from "react-redux";
import { getMembersSelector } from "state/selectors/index";

const mapDispatchToProps = dispatch => ({
  getMembers: () => dispatch({ type: GET_MEMBER })
});

const mapStateToProps = state => ({
  members: getMembersSelector(state)
});

class SellCourseModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [{ value: 0, label: "Chọn hội viên" }]
    };
  }
  componentDidMount = async () => {
    await this.props.getMembers();

    await this.setOptions(this.state.options);
  };

  setOptions = options => {
    console.log(this.props.members);
    let newOpt =
      this.props.members &&
      this.props.members.map(member => ({
        value: member.ID,
        label: member.FullName
      }));
    newOpt = [...options, ...newOpt];

    this.setState({ options: newOpt });
  };

  render() {
    const { isOpen, toggleModal } = this.props;

    const { options } = this.state;

    return (
      <Modal size="lg" isOpen={isOpen} toggleModal={toggleModal}>
        <div className="md__login__modal">
          <p className="md__login__modal__title">ĐĂNG KÝ GÓI TẬP</p>

          <p>Hội viên đăng ký</p>
          <SelectWithInput options={options} selectedOption={options[0]} />

          <div style={{ marginTop: "20px" }} className="text-center">
            <button className="btn btn-primary">
              <span className="btn-label">
                <i className="fa fa-plus"></i>
              </span>
              Cập nhật
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SellCourseModal);
