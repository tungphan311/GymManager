import React, { Component } from "react";
import Modal from "Components/Modal/Modal";
import SelectWithInput from "Components/SelectWithInput/SelectWithInput";
import { GET_MEMBER } from "state/reducers/memberReducer";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  getMembers: () => dispatch({ type: GET_MEMBER })
});

class SellCourseModal extends Component {
  componentDidMount = () => {
    this.props.getMembers();
  };

  render() {
    const { isOpen, toggleModal } = this.props;
    return (
      <Modal size="lg" isOpen={isOpen} toggleModal={toggleModal}>
        <div className="md__login__modal">
          <p className="md__login__modal__title">ĐĂNG KÝ GÓI TẬP</p>

          <p>Hội viên đăng ký</p>
          <SelectWithInput />

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

export default connect(null, mapDispatchToProps)(SellCourseModal);
