// src/ActivitiesSelection.js
import React from "react";
import "./Activities.css"; // Ensure you have necessary styles here or in a global CSS file
import aquarium from "../src/Images/aquarium.jpeg"
import arcade from "../src/Images/arcade.jpeg";
import park from "../src/Images/park.jpeg"
import ceramics from "../src/Images/keramika.jpeg"
import cinema from "../src/Images/cinema.jpeg"
import kunsthalle from "../src/Images/kunsthalle.jpeg"

const Activities = () => {
  const handleContinueClick = () => {
    window.location.href = 'Lastpage.jsx';
  };

  return (
    <div>
      <div id="activityquestion"><b>What are we doing after?</b></div>
      <div className="activities-selection">
        <div className="activity-item">
          <img src={aquarium} alt="aquarium" />
          <label>
            <input type="checkbox" name="activities" value="aquarium" />
            Aquarium
          </label>
        </div>
        <div className="activity-item">
          <img src={arcade} alt="arcade" />
          <label>
            <input type="checkbox" name="activities" value="arcade" />
            Arcade
          </label>
        </div>
        <div className="activity-item">
          <img src={cinema} alt="cinema" />
          <label>
            <input type="checkbox" name="activities" value="cinema" />
            Cinema
          </label>
        </div>
        <div className="activity-item">
          <img src={ceramics} alt="ceramics" />
          <label>
            <input type="checkbox" name="activities" value="ceramics" />
            Ceramics
          </label>
        </div>
        <div className="activity-item">
          <img src={kunsthalle} alt="kunsthalle" />
          <label>
            <input type="checkbox" name="activities" value="kunsthalle" />
            Exhibition
          </label>
        </div>
        <div className="activity-item">
          <img src={park} alt="park.jpeg" />
          <label>
            <input type="checkbox" name="activities" value="park.jpeg" />
            Park
          </label>
        </div>
      </div>
      <button className="button" onClick={handleContinueClick}>
        Last page
      </button>
    </div>
  );
};

export default Activities;
