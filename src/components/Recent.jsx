import React from "react";
import { useState } from "react";

const Recent = () => {
  const [music, setMusic] = useState([]);
  const fetchId = async () => {
    try {
      const res = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="recent">
      <h1>Recent Music</h1>
      <span>View All</span>
      <div className="music-container">
        <div className="music-cards">
          <h3>Music Name</h3>
          <p>ONECHITRA</p>
        </div>
        <div className="music-cards">
          <h3>Music Name</h3>
          <p>ONECHITRA</p>
        </div>
        <div className="music-cards">
          <h3>Music Name</h3>
          <p>ONECHITRA</p>
        </div>
      </div>
    </div>
  );
};

export default Recent;
