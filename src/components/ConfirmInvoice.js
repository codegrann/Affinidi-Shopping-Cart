import React from "react";
import "./Modal.css";
import Invoice from "./Invoice";

const ConfirmInvoice = ({ closeModal }) => {
  return (
    <div className="ModalOverlay">
      <div className="ConfirmationModal">
        <Invoice />
        <button onClick={closeModal}>OK</button>
      </div>
    </div>
  );
};

export default ConfirmInvoice;
