import React from "react";
import "./Activity.css";

const Activity = ({ activity, handleAddToList }) => {
  const { name, time, img, btn_text } = activity;
  return (
    <div className="activity">
      <img src={img} alt="" />
      <h5 className="pt-3 pb-4">{name}</h5>
      <p>Time Required: {time}s</p>
      <button
        onClick={() => {
          handleAddToList(time);
        }}
        className="btn btn-dark"
      >
        {btn_text}
      </button>
    </div>
  );
};

export default Activity;
