import React from "react";
import "../App.css";

const Card = ({ title, description, src, url }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-img">
          <img src={src} alt="News_Img" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h2>{title}</h2>
          </div>
          <div className="card-details">
            <p>{description}</p>
          </div>
          <div className="card-a-main">
            <a href={url} className="card-a">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
