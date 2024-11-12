import React from "react";

export default function Product({ name, img_path, price }) {
  return (
    <div className="product-container">
      <img src={img_path} alt="상품 사진" />
      <div className="product-info">
        <h4>{name}</h4>
        <span>{price}</span>
      </div>
    </div>
  );
}
