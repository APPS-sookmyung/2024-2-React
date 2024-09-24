import React from "react";
import Product from "../components/Product"; // 경로를 추가

export default function ProductPage() {
  const data = [
    {
      id: 1,
      name: "양념치킨소스",
      price: 3980,
      url: "https://product-image.kurly.com/hdims/resize/%5E%3…ct/image/9f735faa-0c6b-4229-a402-2c782276522d.jpg",
      alt: "양념치킨소스 이미지",
    },
    {
      id: 2,
      name: "시나몬 파우더",
      price: 3490,
      url: "https://img-cf.kurly.com/hdims/resize/%5E%3E720x%3…uality/85/src/shop/data/goods/1523351152409l0.jpg",
      alt: "시나몬 파우더 이미지",
    },
    {
      id: 3,
      name: "양념치킨소스3종",
      price: 3900,
      url: "https://img-cf.kurly.com/hdims/resize/%5E%3E720x%3…uality/85/src/shop/data/goods/1641529695872l0.jpg",
      alt: "양념치킨소스3종 이미지",
    },
  ];

  return (
    <div>
      {data.map((d) => (
        <Product key={d.id} name={d.name} price={d.price} url={d.url} alt={d.alt} />
      ))}
    </div>
  );
}
