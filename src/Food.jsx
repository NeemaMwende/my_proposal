// src/FoodSelection.js
import React from "react";
import "./Food.css"; // Ensure you have necessary styles here or in a global CSS file
import burger from "../src/Images/burgers.jpeg";
import dog from "../src/Images/dog.jpeg";
import korean from "../src/Images/dog.jpeg";
import pizza from "../src/Images/pizza.jpeg";
import sushi from "../src/Images/sushi.jpeg";
import steak from "../src/Images/steak.jpeg";
import salad from "../src/Images/salad.jpeg";
import pasta from "../src/Images/pasta.jpeg" ;

const Food = () => {
  const handleContinueClick = () => {
    window.location.href = 'Dessert.jsx';
  };

  return (
    <div>
      <div id="foodquestion">
        <b>What food would you like to eat?</b>
      </div>
      <div className="food-selection">
        <div className="food-item">
          <img src={burger} alt="Burgers, fries and fried chicken" />
          <label>
            <input type="checkbox" name="food" value="Burgers, fries and fried chicken" />
            Burgers and fried chicken
          </label>
        </div>
        <div className="food-item">
          <img src={dog} alt="dog" />
          <label>
            <input type="checkbox" name="food" value="hotdog" />
            Hotdog
          </label>
        </div>
        <div className="food-item">
          <img src={korean} alt="koreanfood" />
          <label>
            <input type="checkbox" name="food" value="Korean food" />
            Korean food
          </label>
        </div>
        <div className="food-item">
          <img src={pasta} alt="pasta" />
          <label>
            <input type="checkbox" name="food" value="pasta" />
            Pasta
          </label>
        </div>
        <div className="food-item">
          <img src={pizza} alt="pizza" />
          <label>
            <input type="checkbox" name="food" value="pizza" />
            Pizza
          </label>
        </div>
        <div className="food-item">
          <img src={salad} alt="salad" />
          <label>
            <input type="checkbox" name="food" value="salad" />
            Salad
          </label>
        </div>
        <div className="food-item">
          <img src={steak} alt="steak" />
          <label>
            <input type="checkbox" name="food" value="steak" />
            Steak
          </label>
        </div>
        <div className="food-item">
          <img src={sushi} alt="sushi" />
          <label>
            <input type="checkbox" name="food" value="sushi" />
            Sushi
          </label>
        </div>
      </div>
      <button className="button" onClick={handleContinueClick}>
        Continue UWU
      </button>
    </div>
  );
};

export default Food;
