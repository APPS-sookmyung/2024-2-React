import React from 'react'

export default function ProductPage() {
  const data = [
    {
      id: 1,
      name: "훈제오리(2입)",
      price: 10500,
      url: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/23a32590-9613-4fe4-b563-f2d5d9a59b25.jpg",
      alt: "훈제오리 이미지",
    },
    {
      id: 2,
      name: "사과, 배",
      price: 19900,
      url: "https://img-cf.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/shop/data/goods/1631513275303l0.jpg",
      alt: "사과, 배 이미지",
    },
    {
      id: 3,
      name: "농심 라면(택3)",
      price: 5300,
      url: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/24a6ceab-dcbb-4ae7-92a8-cc11b5255904.jpg",
      alt: "농심 라면 이미지",
    },
  ];

  return (
    <div>
      {data.map((d) => 
        <Product
          key={d.id}
          name={d.name}
          price={d.price}
          url={d.url}
          alt={d.alt}
        />
      )}
    </div>
  )
}
