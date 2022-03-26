import React from "react";
import ChosenItem from "../ChosenItem/ChosenItem";
import "./Cart.css";
import { FaTrash } from "react-icons/fa";

const Cart = ({ cartItems, emptyCart, chooseCartItem, chosenItem }) => {
  return (
    <div className="cart-area">
      <h4>Selected Bags : </h4>

      <div className="selected-items">
        {cartItems.map((cartItem) => (
          <div
            className="cart-item d-flex align-items-center"
            key={cartItem.id}
          >
            <div className="cart-img-container">
              <img src={cartItem.image} alt="" />
            </div>
            <div className="item-name">
              <p className="mb-0 ms-3">{cartItem.name}</p>
            </div>
            <div className="remove-icon">
              <button>
                <FaTrash></FaTrash>
              </button>
            </div>
          </div>
        ))}
      </div>

      <ChosenItem chosenItem={chosenItem}></ChosenItem>

      <div className="button-area my-3">
        <button className="btn btn-success my-1" onClick={chooseCartItem}>
          Choose 1 for me
        </button>
        <br />
        <button className="btn btn-success my-1" onClick={emptyCart}>
          Choose Again
        </button>
      </div>
    </div>
  );
};

export default Cart;
