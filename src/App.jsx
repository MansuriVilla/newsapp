import React from "react";
import "./App.css";

import Navbar from "./components/navbar";

import Newsection from "./components/newsection";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="main-content">
          {/* <Slider /> */}

          <Newsection />
        </div>
      </div>
    </>
  );
}

export default App;
