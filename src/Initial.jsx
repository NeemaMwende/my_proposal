// src/Valentine.js
import React, { useState } from "react";
import "./App.css";

const Initial = () => {
  const [fontSize, setFontSize] = useState(16); // initial font size

  const handleNoButtonClick = () => {
    setFontSize((prevFontSize) => prevFontSize + 10);
  };

  return (
    <div>
      <div id="valentineQuestion"><b>Will you be my valentine?</b></div>
      <button
        className="answerButton"
        onClick={() => window.location.href = 'Thankyou.html'}
        style={{ fontSize: `${fontSize}px` }}
      >
        Yes
      </button>
      <button
        className="answerButton"
        id="noButton"
        onClick={handleNoButtonClick}
      >
        I no no wanna o(╥﹏╥)o
      </button>
      <br />
      <img src="/cat copy.gif" alt="cat asking question" className="responsive" />
    </div>
  );
};

export default Initial;
