import React, { useEffect, useState } from "react";
import "./ProductDisplay.css";

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
    name: "T-Shirt",
    price: 15,
    imageUrl: "tee.png",
    category: "dressing",
  },
  {
    id: 3,
    name: "Short Trouser",
    price: 10,
    imageUrl: "short.jpeg",
    category: "dressing",
  },
  {
    id: 4,
    name: "Chair",
    price: 10,
    imageUrl: "chair.jpeg",
    category: "furniture",
  },
  {
    id: 5,
    name: "Bed",
    price: 10,
    imageUrl: "bed.jpeg",
    category: "furniture",
  },
  {
    id: 6,
    name: "Shelf",
    price: 10,
    imageUrl: "shelf.jpeg",
    category: "furniture",
  },
];
const ProductDisplay = ({ addToCart }) => {
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState(ourProducts);
  useEffect(() => {
    filterProducts();
  }, [category]);

  function filterProducts() {
    if (category === "all") {
      setProducts(products.filter((product) => product.category === "all"));
    } else if (category === "dressing") {
      setProducts(
        products.filter((product) => product.category === "dressing")
      );
    } else if (category === "furniture") {
      setProducts(
        products.filter((product) => product.category === "furniture")
      );
    }
    return products;
  }
  // filterProducts();
  // products.filter((product) => product.category === "dressing");

  return (
    <div className="">
      <div className="category-filter">
        <label htmlFor="categry">Category:</label>
        <select name="category" id="category">
          <option value="all" onSelect={() => setCategory("all")}>
            All
          </option>
          <option value="dressing" onSelect={() => setCategory("dressing")}>
            Dressing
          </option>
          <option value="furniture" onSelect={() => setCategory("furniture")}>
            Furniture
          </option>
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
