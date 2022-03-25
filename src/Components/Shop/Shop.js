import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
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
    <div className="shop-container">
      <h3 className="text-center my-4">Choose Your 4 Bags</h3>
      <div className="row gx-0">
        <div className="col-lg-9 col-md-9 col-sm-8">
          <div className="product-container row gy-4">
            {products.map((product) => (
              <Product product={product} key={product.id}></Product>
            ))}
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 cart-container">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
