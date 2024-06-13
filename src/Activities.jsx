// src/ActivitiesSelection.js
import React from "react";
import "./Activities.css"; // Ensure you have necessary styles here or in a global CSS file

const Activities = () => {
  const handleContinueClick = () => {
    window.location.href = 'Lastpage.jsx';
  };

  return (
    <div>
      <div id="activityquestion"><b>What are we doing after?</b></div>
      <div className="activities-selection">
        <div className="activity-item">
          <img src="/activities/activities/aquarium.jpeg" alt="aquarium" />
          <label>
            <input type="checkbox" name="activities" value="aquarium" />
            Aquarium
          </label>
        </div>
        <div className="activity-item">
          <img src="/activities/activities/arcade.jpeg" alt="arcade" />
          <label>
            <input type="checkbox" name="activities" value="arcade" />
            Arcade
          </label>
        </div>
        <div className="activity-item">
          <img src="/activities/activities/cinema.jpeg" alt="cinema" />
          <label>
            <input type="checkbox" name="activities" value="cinema" />
            Cinema
          </label>
        </div>
        <div className="activity-item">
          <img src="/activities/activities/keramika.jpeg" alt="ceramics" />
          <label>
            <input type="checkbox" name="activities" value="ceramics" />
            Ceramics
          </label>
        </div>
        <div className="activity-item">
          <img src="/activities/activities/kunsthalle.jpeg" alt="kunsthalle" />
          <label>
            <input type="checkbox" name="activities" value="kunsthalle" />
            Exhibition
          </label>
        </div>
        <div className="activity-item">
          <img src="/activities/activities/park.jpeg" alt="park.jpeg" />
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
