import React from "react";
import Activities from "../Activities/Activities";
import Dashboard from "../Dashboard/Dashboard";
import "./Gym.css";

const Gym = () => {
  return (
    <div className="gym">
      <Activities></Activities>
      <Dashboard></Dashboard>
    </div>
  );
};

export default Gym;
