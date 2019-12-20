import React, { Component } from "react";
import { Modal as BootstrapModal } from "react-bootstrap";
import "./Modal.scss";

// https://react-bootstrap.github.io/components/modal/
// size: 'sm', 'md' 'lg','xl'
class Modal extends Component {
  render() {
    const { isOpen, toggleModal, size = "lg", children } = this.props;
    return (
      <BootstrapModal
        show={isOpen}
        onHide={toggleModal}
        className="md__modal"
        dialogClassName="md__modal__dialog"
        size={size}
      >
        <div className={"md__modal__content-wrapper"}>
          <i className="flaticon-cross" onClick={toggleModal} />
          {children}
        </div>
      </BootstrapModal>
    );
  }
}

export default Modal;
