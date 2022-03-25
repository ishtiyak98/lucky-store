import React from "react";

const ChosenItem = ({ chosenItem }) => {
  return (
    <div>
      {chosenItem.map((item) => (
        <div className="chosen-item" key={item.id}>
          <h5>Chosen Item is: </h5>
          <div className="cart-item d-flex align-items-center">
            <img src={item.image} alt="" />
            <p className="mb-0 ms-3">{item.name}</p>
          </div>
        </div>
      ))}

      {/* <div className="chosen-item">
        <h5>Chosen Item is: </h5>
        <div className="cart-item d-flex align-items-center">
          <img src={chosenItem.image} alt="" />
          <p className="mb-0 ms-3">{chosenItem.name}</p>
        </div>
      </div> */}
    </div>
  );
};

export default ChosenItem;
