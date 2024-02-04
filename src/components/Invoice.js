// Invoice.js
import React from "react";
import jsPDF from "jspdf";
import { generatePath } from "react-router-dom";

function Invoice({ cartItems }) {
  const generateInvoice = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();
    var y = 10;

    // Add content to the PDF
    // doc.text("Invoice", 10, 10);
    // doc.text(`Transaction ID: ${cartItems}`, 10, 20);
    // doc.text(`Amount: $${cartItems}`, 10, 30);
    // doc.text(`Date: ${cartItems}`, 10, 40);
    // doc.text(`Status: ${cartItems}`, 10, 50);

    doc.setFontSize(18);
    doc.text("Invoice", 10, y);
    y += 10;

    // Add product details
    doc.setFontSize(12);
    cartItems.forEach((item) => {
      doc.text(`Product: ${item.name}`, 10, y);
      y += 8;
      doc.text(`Quantity: ${item.quantity}`, 10, y);
      y += 8;
      doc.text(`Price: $${item.price.toFixed(2)}`, 10, y);
      y += 10;
      // Calculate total price for the product
      var totalPrice = item.quantity * item.price;
      doc.text(`Total: $${totalPrice.toFixed(2)}`, 10, y);
      y += 15; // Add some space between products
    });

    // Calculate and add the final total
    var finalTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    doc.text(`Final Total: $${finalTotal.toFixed(2)}`, 10, y + 10);

    // Save the PDF or display it in a new browser tab
    doc.save("invoice.pdf");
  };

  return (
    <div>
      <button onClick={generateInvoice}>Generate Invoice</button>
    </div>
  );
}
export const generateInvoice = generateInvoice;
export default Invoice;
