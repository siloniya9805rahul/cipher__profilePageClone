import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutMe">
      <div className="head">
        <h1>About Me </h1>
        <button id="about-edit-button">Edit</button>
      </div>
      <input
        type="text"
        placeholder="Add something about you."
        id="aboutMeInput"
      />
    </div>
  );
}

export default AboutMe;
