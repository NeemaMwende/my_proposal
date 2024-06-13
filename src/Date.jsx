import React from "react";
import './Date.css'

const Date = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = 'Food.jsx';
  };

  return (
    <div>
      <h1 title="choose a date">Are you free on ...</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        <label>Which day: (select a date)</label>
        <div>
          <input type="date" />
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Date;
