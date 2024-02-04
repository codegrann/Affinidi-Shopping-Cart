import React from "react";

import PaypalButton from "./PaypalButton";
import "./Modal.css";

const ConfirmationModal = ({ closeModal, cartItems }) => {
  return (
    <div className="ModalOverlay">
      <div className="ConfirmationModal">
        <p>Order submitted. Thank you for shopping with us!</p>
        <PaypalButton />
        <button onClick={closeModal}>OK</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
