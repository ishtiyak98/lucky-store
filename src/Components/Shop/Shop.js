import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container container">
      <h3 className="text-center my-4">Choose Your 4 Bags</h3>
      <div className="row g-4">
        <div className="col-lg-10 col-md-10 col-sm-10 product-container row g-4">
          {products.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))}
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2 cart-container">
          <h1>This is Cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Shop;
