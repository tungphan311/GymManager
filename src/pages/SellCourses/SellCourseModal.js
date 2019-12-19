import React from "react";
import Modal from "Components/Modal/Modal";

function SellCourseModal({ isOpen, toggleModal }) {
  return (
    <Modal size="lg" isOpen={isOpen} toggleModal={toggleModal}>
      <div className="md__login__modal">
        <p className="md__login__modal__title">ĐĂNG KÝ GÓI TẬP</p>
      </div>
    </Modal>
  );
}

export default SellCourseModal;
