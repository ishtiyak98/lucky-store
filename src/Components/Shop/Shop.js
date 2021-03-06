import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [chosenItem, setChosenItem] = useState([]);

  //!--------- load all data from JSON -----------
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  //!--------- add selected data to Cart -----------
  const addToCart = (product) => {
    if (cartItems.length < 4) {
      if (!cartItems.includes(product)) {
        const newCartItem = [...cartItems, product];
        setCartItems(newCartItem);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Duplicate Items Found in Cart!',
        })
      }
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'You can add only 4 items',
      })
    }
  };

  //!--------- Choose Cart randomly -----------
  const chooseCartItem = () => {
    console.log(cartItems);
    if (cartItems.length > 0) {
      const randomNumber = Math.round(Math.random() * (cartItems.length - 1));
      console.log(randomNumber);
      setChosenItem([cartItems[randomNumber]]);
    } else if (cartItems.length === 0) {
      alert("Cart is empty !!");
    }
  };

  //!--------- remove item from Cart -----------
  const removeItem = (cartItem) => {
    const restItem = cartItems.filter((item) => item.id !== cartItem.id);
    setCartItems(restItem);
  };

  //!--------- remove item from Chosen-field -----------
  const removeChosenItem = () => {
    setChosenItem([]);
  };

  //!--------- remove all data from Cart -----------
  const emptyCart = () => {
    setCartItems([]);
    setChosenItem([]);
  };

  return (
    <div className="shop-container">
      <h3 className="text-center my-4">Choose Your 4 Bags</h3>
      <div className="row gx-0 gy-4 flex-sm-column-reverse flex-column-reverse flex-md-row flex-lg-row">
        <div className="col-lg-9 col-md-8">
          <div className="product-container mx-lg-5 mx-3">
            <div className="row gy-4">
              {products.map((product) => (
                <Product
                  product={product}
                  key={product.id}
                  addToCart={addToCart}
                ></Product>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 cart-container">
          <Cart
            cartItems={cartItems}
            chooseCartItem={chooseCartItem}
            chosenItem={chosenItem}
            emptyCart={emptyCart}
            removeItem={removeItem}
            removeChosenItem={removeChosenItem}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
