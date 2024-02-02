import React from "react";
import "./ProductDisplay.css";

const ProductDisplay = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: "Hoodie",
      price: 10,
      imageUrl: "../assets/hoodie.png",
      category: "dressing",
    },
    {
      id: 2,
      name: "T-Shirt",
      price: 15,
      imageUrl: "../assets/tee.png",
      category: "dressing",
    },
    {
      id: 3,
      name: "Short Trouser",
      price: 10,
      imageUrl: "../assets/short.png",
      category: "dressing",
    },
    {
      id: 4,
      name: "T-Shirt",
      price: 10,
      imageUrl: "../assets/tee.png",
      category: "dressing",
    },
  ];

  return (
    <div className="ProductDisplay">
      {products.map((product) => (
        <div key={product.id} className="ProductItem">
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
