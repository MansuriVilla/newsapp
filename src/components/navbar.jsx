import React from "react";
import "../App.css";

export default function Navbar() {
  return (
    <div className="navbar-main">
      <div className="navbar-inner">
        <div className="navbar-left">
          <a href="#">News App</a>
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <a href="">Teach</a>
            </li>
            <li>
              <a href="">Business</a>
            </li>
            <li>
              <a href="">World</a>
            </li>
            <li>
              <a href="">Science</a>
            </li>
            {/* <li>
              <a href="">456</a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
