import React from "react";
import "./Cart.css"

const Cart = ({cartItems}) => {
  console.log(cartItems);
  return (
    <div className="cart-area p-4">
      <h4>Selected Bags: </h4>

      <div className="selected-items">
        {
          cartItems.map(cartItem=> <li key={cartItem.id}>{cartItem.name}</li> )
        }
      </div>

      <div className="button-area my-3">
        <button className="btn btn-success my-1">Choose 1 for me</button> <br />
        <button className="btn btn-success my-1">Choose Again</button>
      </div>
    </div>
  );
};

export default Cart;
