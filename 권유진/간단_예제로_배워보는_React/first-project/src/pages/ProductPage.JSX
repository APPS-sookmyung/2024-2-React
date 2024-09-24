import React from 'react';

export default function ProductPage() {

    const data = [
        {
            id: 1,
            name: "육즙+왕교자 만두 1.01kg",
            price: 8480,
            url: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/0aa84c43-8211-46d2-bdec-863797bb8e0a.jpg",
            alt: "육즙+왕교자 만두"
        },
        {
            id: 2,
            name: "훈제오리 2종 (2입)",
            price: 6790,
            url: "https://product-image.kurly.com/hdims/resize/%5E%3E720x%3E936/cropcenter/720x936/quality/85/src/product/image/23a32590-9613-4fe4-b563-f2d5d9a59b25.jpg",
            alt: "훈제오리 이미지"
        },
        {
            id: 3,
            name: "짬뽕 2인분 (맵기선택)",
            price: 11730,
            url: "https://product-image.kurly.com/hdims/resize/%5E%3E720x%3E936/cropcenter/720x936/quality/85/src/product/image/3b416cbf-8d57-44b2-bcc6-e6d6c141160f.jpg",
            alt: "짬뽕 이미지"
        }
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