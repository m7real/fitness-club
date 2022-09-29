import React, { useState } from "react";
import Activities from "../Activities/Activities";
import Dashboard from "../Dashboard/Dashboard";
import "./Gym.css";

const Gym = () => {
  const [time, setTime] = useState(0);
  const handleAddToList = (addedTime) => {
    const newTime = time + addedTime;
    setTime(newTime);
  };
  return (
    <div className="gym">
      <Activities handleAddToList={handleAddToList}></Activities>
      <Dashboard exerciseTime={time}></Dashboard>
    </div>
  );
};

export default Gym;
