import React from "react";

export default function Card({ id, label, headline, img_path }) {
  return (
    <li id={id} className="gallery-item">
      <div className="card-container">
        <div className="card">
          <div className="feature-card-content">
            <div className="feature-card-copy">
              <p className="typography-feature-card-label">{label}</p>
              <p className="typography-feature-card-headline">
                {headline[0]}
                <br />
                {headline[1]}
              </p>
            </div>
            <div className="feature-card-image-container">
              <img src={img_path} alt={label} />
            </div>
          </div>
        </div>
        <button className="card-button">+</button>
      </div>
    </li>
  );
}
