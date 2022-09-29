import React from "react";
import logo from "../../images/Logo.svg";
import "./Activities.css";

const Activities = () => {
  return (
    <div className="activities-container">
      <h2>
        <img src={logo} alt="" /> Fitness Club
      </h2>
      <h4>Select Your Plan For Today</h4>
    </div>
  );
};

export default Activities;
