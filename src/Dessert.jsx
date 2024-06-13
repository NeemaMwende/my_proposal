import React from "react";
import "./App.css"; // Ensure you have necessary styles here or in a global CSS file

const DessertSelection = () => {
  const handleContinueClick = () => {
    window.location.href = 'Activities.jsx';
  };

  return (
    <div>
      <div id="dessertquestion">Which dessert we eatin cuh</div>
      <div className="dessert-selection">
        <div className="dessert-item">
          <img src="/food/food/boba.jpeg" alt="boba" />
          <label>
            <input type="checkbox" name="dessert" value="boba" />
            Boba
          </label>
        </div>
        <div className="dessert-item">
          <img src="/food/food/churro.jpeg" alt="churro" />
          <label>
            <input type="checkbox" name="dessert" value="churro" />
            Churro
          </label>
        </div>
        <div className="dessert-item">
          <img src="/food/food/che.jpeg" alt="che" />
          <label>
            <input type="checkbox" name="dessert" value="che" />
            Che
          </label>
        </div>
        <div className="dessert-item">
          <img src="/food/food/mochi.jpeg" alt="mochi" />
          <label>
            <input type="checkbox" name="dessert" value="mochi" />
            Mochi
          </label>
        </div>
        <div className="dessert-item">
          <img src="/food/food/randombun.jpeg" alt="randombun" />
          <label>
            <input type="checkbox" name="dessert" value="randombun" />
            Random bun
          </label>
        </div>
        <div className="dessert-item">
          <img src="/food/food/taiyaki.jpeg" alt="taiyaki" />
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

export default DessertSelection;
