// Invoice.js
import React from "react";
import jsPDF from "jspdf";

function Invoice({ cartItems }) {
  const generateInvoice = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();
    var y = 10;

    doc.setFontSize(18);
    doc.text("Invoice", 10, y);
    y += 10;

    var consolidatedItems = new Map();

    cartItems.forEach((item) => {
      if (!consolidatedItems.has(item.name)) {
        consolidatedItems.set(item.name, {
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        });
      } else {
        consolidatedItems.get(item.name).quantity += item.quantity;
      }
    });

    // Add product details
    doc.setFontSize(12);
    consolidatedItems.forEach((item) => {
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
// export const generateInvoice = generateInvoice;
export default Invoice;
