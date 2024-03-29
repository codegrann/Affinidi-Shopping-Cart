import React, { useEffect, useState } from "react";
import "./ProductDisplay.css";

// Add more products and categories as you intend
const ourProducts = [
  {
    id: 1,
    name: "Hoodie",
    price: 10,
    imageUrl: "hoodie.png",
    category: "dressing",
  },
  {
    id: 2,
    name: "Chair",
    price: 20,
    imageUrl: "chair.jpeg",
    category: "furniture",
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 15,
    imageUrl: "tee.png",
    category: "dressing",
  },

  {
    id: 4,
    name: "Bed",
    price: 135,
    imageUrl: "bed.jpeg",
    category: "furniture",
  },
  {
    id: 5,
    name: "Shelf",
    price: 95,
    imageUrl: "shelf.jpeg",
    category: "furniture",
  },
  {
    id: 6,
    name: "Short Trouser",
    price: 10,
    imageUrl: "short.jpeg",
    category: "dressing",
  },
];
const ProductDisplay = ({ addToCart }) => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState(ourProducts);
  useEffect(() => {
    filterProducts();
  }, [category]);

  function filterProducts() {
    if (category === "all") {
      setProducts(ourProducts);
    } else if (category === "dressing") {
      setProducts(
        ourProducts.filter((product) => product.category === "dressing")
      );
    } else if (category === "furniture") {
      setProducts(
        ourProducts.filter((product) => product.category === "furniture")
      );
    }
  }

  return (
    <div className="Products">
      <div className="category-filter">
        <label htmlFor="categry">Category:</label>
        <select
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="dressing">Dressing</option>
          <option value="furniture">Furniture</option>
        </select>
      </div>
      <div className="ProductDisplay">
        {/* {filterProducts()} */}
        {products.map((product) => (
          <div key={product.id} className="ProductItem">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
