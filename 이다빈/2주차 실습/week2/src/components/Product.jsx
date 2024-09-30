import React from 'react'

export default function Product({z}) {
  // 객체 구조 분해 할당(비구조화 할당)
  // props 대신 {url, alt, name, price} 사용
  // props로 어떤 데이터를 받고 있는가를 한눈에 확인 가능

  return (
    <div>
      <img src={url} alt={alt}/> {/* 이미지 url, 대체 텍스트 */}
      <div>{name}</div> {/* 상품 이름 */}
      <div>{price}</div> {/* 상품 가격 */}
    </div>
  )
}
