import React from "react";
import "./Modal.css";

const ConfirmationModal = ({ closeModal, cartItems }) => {
  console.log(cartItems);
  return (
    <div className="ModalOverlay">
      <div className="ConfirmationModal">
        <p>Order submitted. Thank you for shopping with us!</p>
        <button onClick={closeModal}>OK</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
