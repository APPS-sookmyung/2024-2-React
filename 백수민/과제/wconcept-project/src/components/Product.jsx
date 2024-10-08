import React from 'react'

export default function Product( {brand_name, img_path, product_name, price}) {
  return (
    <div className='product-container'>
        <img src={img_path} alt="상품 이미지" />
        <div className='product-info'>
          <h5 id="bName">{brand_name}</h5>
          <h6 id="pName">{product_name}</h6>
          <h5 id="price">{price}</h5>
        </div>
    </div>
  )
}
