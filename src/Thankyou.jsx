// src/ThankYou.js
import React from "react";
import "./Thankyou.css"

const ThankYou = () => {
  const handleButtonClick = () => {
    window.location.href = 'Date.jsx';
  };

  return (
    <div>
      <div id="thankyou"><b>Thank you</b></div>
      <img id="rizz" src="rizz.gif" alt="rizzler god" className="responsive" />
      <br />
      <audio controls autoPlay loop>
        <source src="congratulations.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <h1>Don't go yet!</h1>
      <button className="button" onClick={handleButtonClick}>
        Click me UWU
      </button>
    </div>
  );
};

export default ThankYou;
