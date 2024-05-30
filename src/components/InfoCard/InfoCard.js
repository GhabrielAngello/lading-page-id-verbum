import React from "react";
import "./InfoCard.css";

function InfoCard({ imageSrc, title, text1, text2, text3 }) {
  return (
    <div className="info-card" id="about">
      <div className="info-content">
        <img src={imageSrc} alt="placeholder" className="info-image" />
        <div className="info-text">
          <h2 className="title-info">{title}</h2>
          <ul className="card-list">
            <li className="info-item"><p>{text1}</p></li>
            <li className="info-item"><p>{text2}</p></li>
            <li className="info-item"><p>{text3}</p></li>
          </ul>   
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
