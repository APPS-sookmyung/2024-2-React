import React from 'react'

export default function Product({url, alt, name, price}) {
// props 대신 {url, alt, name, price} 이용
  return (
    <div>
      <img src={url} alt={alt}/> {/* 이미지 url, 대체 텍스트 */}
      <div>{name}</div> {/* 상품 이름 */}
      <div>{price}</div> {/* 상품 가격 */}
    </div>
  )
}
