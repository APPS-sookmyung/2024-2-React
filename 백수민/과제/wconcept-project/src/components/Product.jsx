import React from 'react'
import { useState } from 'react'

let heartState = "♡"
export default function Product({ brand_name, img_path, product_name, price }) {
  const [heart, setHeart] = useState(false);

  function clickHeart() {
    setHeart(!heart);
  };

  heart ? heartState = "♥" : heartState = "♡";

  return (
    <div className='product-container'>
      <img src={img_path} alt="상품 이미지" />
      <div className='product-info'>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <h5 id="bName">{brand_name}</h5>
          <span onClick={clickHeart}>{heartState}</span>
        </div>
        <h6 id="pName">{product_name}</h6>
        <h5 id="price">{price}</h5>
      </div>
    </div>
  )
}
