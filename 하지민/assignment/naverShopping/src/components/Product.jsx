import React, { useState } from "react";

export default function Product({ title, price, discount_rate, image }) {
  // "좋아요" 상태를 관리하는 useState 추가
  const [isLiked, setIsLiked] = useState(false);

  // 좋아요 버튼 클릭 시 상태를 토글하는 함수
  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  return (
    <div className="product-container">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h4>{title}</h4>
        <span className="price">{price}원</span>
        {discount_rate && <span className="discount-rate">{discount_rate}%</span>}
        <button onClick={handleLikeClick}>{isLiked ? "❤️ 좋아요" : "🤍 좋아요"}</button>
      </div>
    </div>
  );
}
