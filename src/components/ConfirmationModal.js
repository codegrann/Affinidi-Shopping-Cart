import React from "react";
import "./Modal.css";
import Invoice from "./Invoice";

const ConfirmationModal = ({ closeModal, cartItems }) => {
  return (
    <div className="ModalOverlay">
      <div className="ConfirmationModal">
        <p>Order submitted. Thank you for shopping with us!</p>
        <Invoice cartItems={cartItems} />
        <button onClick={closeModal}>OK</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
