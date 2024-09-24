import React from "react";
import Product from "../components/Product";

export default function ProductPage() {
  const data = [
    {
      id: 1,
      name: "양념치킨소스",
      price: 3980,
      url: "",
      alt: "양념치킨소스 이미지",
    },
    {
      id: 2,
      name: "시나몬 러스크",
      price: 7000,
      url: "",
      alt: "시나몬 러스크 이미지",
    },
    {
      id: 3,
      name: "양념치킨소스",
      price: 7000,
      url: "",
      alt: "양념치킨소스 이미지",
    },
  ];

  return (
    <div>
      {data.map((d) => (
        <Product
          key={d.id}
          name={d.name}
          price={d.price}
          url={d.url}
          alt={d.alt}
        />
      ))}
    </div>
  );
}
