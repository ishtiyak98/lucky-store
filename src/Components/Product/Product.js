import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { name, image, price } = product;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card-container m-auto">
        <img className="img-fluid" src={image} alt="" />
        {/* <div className="img-container">
          <img className="img-fluid" src={image} alt="" />
        </div> */}
        <div className="product-details">
          <h4>{name}</h4>
          <p>Price: {price}Tk</p>
        </div>
        <div className="add-cart-btn">
          <button className="btn btn-primary ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
