import React from "react";

const Product = ({ product }) => {
  const { name, image, price } = product;
  return (
    <div className="col-lg-4">
      <div className="card-container">
        <div className="img-container">
          <img src={image} alt="" width={200}/>
        </div>
        <div className="product-details">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Product;
