import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItem] = useState([]);

  //!--------- load all data from JSON -----------
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  //!--------- add selected data to Cart -----------
  const addToCart = (product) => {
    const newCartItem = [...cartItems, product];
    setCartItem(newCartItem);
  };

  return (
    <div className="shop-container">
      <h3 className="text-center my-4">Choose Your 4 Bags</h3>
      <div className="row gx-0">
        <div className="col-lg-9 col-md-9 col-sm-8">
          <div className="product-container row gy-4">
            {products.map((product) => (
              <Product
                product={product}
                key={product.id}
                addToCart={addToCart}
              ></Product>
            ))}
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-4 cart-container">
          <Cart cartItems={cartItems}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
