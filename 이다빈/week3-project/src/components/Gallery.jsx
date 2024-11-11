import React from "react";
import Card from "./Card";

export default function Gallery({ dummy }) {
  return (
    <div className="gallery">
      <div className="scroll-container">
        <div className="item-container">
          <ul className="card-set">
            {dummy.map((item) => {
              return (
                <Card
                  id={item.id}
                  label={item.label}
                  headline={item.headline}
                  img_path={item.img_path}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
