// src/FoodSelection.js
import React from "react";
import "./Food.css"; // Ensure you have necessary styles here or in a global CSS file

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
          <img src="/food/food/burgers.jpeg" alt="Burgers, fries and fried chicken" />
          <label>
            <input type="checkbox" name="food" value="Burgers, fries and fried chicken" />
            Burgers and fried chicken
          </label>
        </div>
        <div className="food-item">
          <img src="/food/food/dog.jpeg" alt="dog" />
          <label>
            <input type="checkbox" name="food" value="hotdog" />
            Hotdog
          </label>
        </div>
        <div className="food-item">
          <img src="/food/food/koreanfood.jpeg" alt="koreanfood" />
          <label>
            <input type="checkbox" name="food" value="Korean food" />
            Korean food
          </label>
        </div>
        <div className="food-item">
          <img src="/food/food/pasta.jpeg" alt="pasta" />
          <label>
            <input type="checkbox" name="food" value="pasta" />
            Pasta
          </label>
        </div>
        <div className="food-item">
          <img src="/food/food/pizza.jpeg" alt="pizza" />
          <label>
            <input type="checkbox" name="food" value="pizza" />
            Pizza
          </label>
        </div>
        <div className="food-item">
          <img src="/food/food/salad.jpeg" alt="salad" />
          <label>
            <input type="checkbox" name="food" value="salad" />
            Salad
          </label>
        </div>
        <div className="food-item">
          <img src="/food/food/steak.jpeg" alt="steak" />
          <label>
            <input type="checkbox" name="food" value="steak" />
            Steak
          </label>
        </div>
        <div className="food-item">
          <img src="/food/food/sushi.jpeg" alt="sushi" />
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
