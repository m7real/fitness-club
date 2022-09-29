import React from "react";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <h4>Real Sarker</h4>
      <p>
        <small>Mymensingh, Bangladesh</small>
      </p>
      <div className="user-info">
        <div>
          <h4>
            68<small className="fs-6">kg</small>
          </h4>
          <p>Weight</p>
        </div>
        <div>
          <h4>5.8</h4>
          <p>Height</p>
        </div>
        <div>
          <h4>
            23<small className="fs-6">years</small>
          </h4>
          <p>Age</p>
        </div>
      </div>
      <h4 className="pb-2">Add A Break</h4>
      <div className="break-container">
        <button>10s</button>
        <button>20s</button>
        <button>30s</button>
        <button>40s</button>
      </div>
      <h4>Exercise Details</h4>
      <div className="time">
        <p>Exercise Time</p>
        <p className="text-secondary">0 seconds</p>
      </div>
      <div className="time">
        <p>Break Time</p>
        <p className="text-secondary">0 seconds</p>
      </div>
      <button className="btn btn-dark btn-complete">Activity Completed</button>
    </div>
  );
};

export default Dashboard;
