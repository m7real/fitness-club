import React from "react";
import "./Activity.css";

const Activity = ({ activity }) => {
  const { name, time, img, btn_text } = activity;
  return (
    <div className="activity">
      <img src={img} alt="" />
      <h5>{name}</h5>
    </div>
  );
};

export default Activity;
