import React from "react";
import { skillSet } from "../appData/data";

const AboutMe = () => {
  return (
    <div id="about" className="aboutme-main">
      <p className="h1-font">About Me</p>
      <p>{`Hello! I'm a passionate computer engineering student at Silver Oak University, located in the vibrant city of Ahmedabad, Gujarat.`}</p>
      <p>{`I am deeply fascinated by the world of web development, particularly ReactJS and Python.`}</p>
      <p>{`I love creating immersive and user-friendly web experiences, and I constantly seek to expand my knowledge and skills in these areas.`}</p>
      <p>{`With a creative mindset and a strong attention to detail, I strive to craft visually appealing and robust applications that provide seamless user interactions.`}</p>
      <p>{`I am eager to contribute to the ever-evolving field of web development and make a positive impact through my work. Let's build amazing things together!`}</p>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {skillSet.map((item, index) => (
          <div className="aboute-me-skill-box" key={index}>
            <p>{item.label}</p>
            <div className="aboute-me-skill-full-width">
              <div
                className={`aboute-me-skill-width width-${item.level}`}
              >{`${item.level}%`}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
