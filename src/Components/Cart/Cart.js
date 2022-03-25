import React, { useState } from "react";
import ChosenItem from "../ChosenItem/ChosenItem";
import "./Cart.css";

const Cart = ({ cartItems, emptyCart }) => {
  const [chosenItem, setChosenItem] = useState([]);

  //!--------- Choose Cart randomly -----------
  const chooseCartItem = () => {
    if (cartItems) {
      const randomNumber = Math.round(Math.random() * 3);
      setChosenItem([cartItems[randomNumber]]);
    } 
    else {
      alert("Cart is empty !!");
    }
  };

  return (
    <div className="cart-area p-4">
      <h4>Selected Bags : </h4>

      <div className="selected-items">
        {cartItems.map((cartItem) => (
          <div
            className="cart-item d-flex align-items-center"
            key={cartItem.id}
          >
            <img src={cartItem.image} alt="" />
            <p className="mb-0 ms-3">{cartItem.name}</p>
          </div>
        ))}
      </div>

      <div className="button-area my-3">
        <button className="btn btn-success my-1" onClick={chooseCartItem}>
          Choose 1 for me
        </button>
        <br />
        <button className="btn btn-success my-1" onClick={emptyCart}>
          Choose Again
        </button>
      </div>

      <ChosenItem chosenItem={chosenItem}></ChosenItem>
    </div>
  );
};

export default Cart;
