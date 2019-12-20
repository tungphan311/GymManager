import React, { Component } from "react";
import Modal from "Components/Modal/Modal";
import SelectWithInput from "Components/SelectWithInput/SelectWithInput";
import { GET_MEMBER } from "state/reducers/memberReducer";
import { connect } from "react-redux";
import { getMembersSelector } from "state/selectors/index";
import { BUY_CLASS } from "state/reducers/courseReducer";

const mapDispatchToProps = dispatch => ({
  getMembers: () => dispatch({ type: GET_MEMBER }),
  buyClass: memberid => dispatch({ type: BUY_CLASS, memberid })
});

const mapStateToProps = state => ({
  members: getMembersSelector(state)
});

class SellCourseModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: { value: 0, label: "Chọn hội viên" }
    };
  }

  componentDidMount = () => {
    this.props.getMembers();
  };

  handleSubmit = () => {
    this.props.buyClass(this.state.selected.value);
  };

  render() {
    const { isOpen, toggleModal, members } = this.props;
    const { selected } = this.state;

    return (
      <Modal size="lg" isOpen={isOpen} toggleModal={toggleModal}>
        <div className="md__login__modal">
          <p className="md__login__modal__title">ĐĂNG KÝ GÓI TẬP</p>

          <p>Hội viên đăng ký</p>
          <SelectWithInput
            options={members}
            selectedOption={selected}
            onChange={selected => this.setState({ selected })}
          />

          <div style={{ marginTop: "20px" }} className="text-center">
            <button className="btn btn-primary" onClick={this.handleSubmit}>
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
