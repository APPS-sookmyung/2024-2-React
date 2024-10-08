import React from "react";

export default function Product({ title, price, discount_rate, image }) {
  return (
    <div className="product-container">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h4>{title}</h4>
        <span className="price">{price}원</span>
        {discount_rate && <span className="discount-rate">{discount_rate}%</span>}
      </div>
    </div>
  );
}
