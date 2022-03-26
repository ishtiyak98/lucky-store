import React from "react";
import { FaTrash } from "react-icons/fa";

const ChosenItem = ({ chosenItem, removeChosenItem }) => {
  return (
    <div>
      {chosenItem.map((item) => (
        <div className="chosen-item" key={item.id}>
          <h5>Chosen Item is: </h5>
          <div className="cart-item d-flex align-items-center ms-2">
            <div className="cart-img-container">
              <img src={item.image} alt="" />
            </div>
            <div className="item-name">
              <p className="mb-0 ms-3">{item.name}</p>
            </div>
            <div className="remove-icon">
              <button onClick={removeChosenItem}>
                <FaTrash></FaTrash>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChosenItem;
