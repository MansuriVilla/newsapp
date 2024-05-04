import React from "react";
import "../App.css";

export default function Slider() {
  return (
    <div className="slider-main">
      <div className="slider-inner">
        <div className="slider-left">
          <div className="left-quotes">
            <div className="quotes">
              <h1>Some Text</h1>
            </div>
          </div>
        </div>
        <div className="slider-right">
          <div className="right-inner">
            <div className="right-top">
              <p>Some Text From Right Top</p>
            </div>
            <div className="right-bottom">
              <p>Some Text From Right Bottom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
