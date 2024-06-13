import React from "react";
import "./Dessert.css"; // Ensure you have necessary styles here or in a global CSS file
import churro from "../src/Images/churro.jpeg";
import che from "../src/Images/che.jpeg"
import mochi from "../src/Images/mochi.jpeg";
import randombun from "../src/Images/randombun.jpeg";
import taiyaki from "../src/Images/taiyaki.jpeg";
import boba from "../src/Images/boba.jpeg"

const Dessert = () => {
  const handleContinueClick = () => {
    window.location.href = 'Activities.jsx';
  };

  return (
    <div>
      <div id="dessertquestion">Which dessert we eatin cuh</div>
      <div className="dessert-selection">
        <div className="dessert-item">
          <img src={boba} alt="boba" />
          <label>
            <input type="checkbox" name="dessert" value="boba" />
            Boba
          </label>
        </div>
        <div className="dessert-item">
          <img src={churro} alt="churro" />
          <label>
            <input type="checkbox" name="dessert" value="churro" />
            Churro
          </label>
        </div>
        <div className="dessert-item">
          <img src={che} alt="che" />
          <label>
            <input type="checkbox" name="dessert" value="che" />
            Che
          </label>
        </div>
        <div className="dessert-item">
          <img src={mochi} alt="mochi" />
          <label>
            <input type="checkbox" name="dessert" value="mochi" />
            Mochi
          </label>
        </div>
        <div className="dessert-item">
          <img src={randombun} alt="randombun" />
          <label>
            <input type="checkbox" name="dessert" value="randombun" />
            Random bun
          </label>
        </div>
        <div className="dessert-item">
          <img src={taiyaki} alt="taiyaki" />
          <label>
            <input type="checkbox" name="dessert" value="taiyaki" />
            Taiyaki
          </label>
        </div>
      </div>
      <button className="button" onClick={handleContinueClick}>
        Continue UWU
      </button>
    </div>
  );
};

export default Dessert;
