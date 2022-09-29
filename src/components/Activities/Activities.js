import React, { useEffect, useState } from "react";
import logo from "../../images/Logo.svg";
import Activity from "../Activity/Activity";
import "./Activities.css";

const Activities = ({ handleAddToList }) => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <div className="activities-wrapper">
      <h2>
        <img src={logo} alt="" /> Fitness Club
      </h2>
      <h4>Select Your Plan For Today</h4>
      <div className="activities-container">
        {activities.map((activity) => (
          <Activity key={activity.id} activity={activity} handleAddToList={handleAddToList}></Activity>
        ))}
      </div>
    </div>
  );
};

export default Activities;
