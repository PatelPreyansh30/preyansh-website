import React from "react";
import { FaRegLightbulb, FaMagic, FaRobot, FaPython } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";

const Interest = () => {
  return (
    <div className="interest-main-section" id="interest">
      <p className="h1-font" style={{ marginBottom: "20px" }}>
        Interest
      </p>
      <div className="flex flex-wrap justify-content-center">
        <div className="interest-box">
          <FaMagic className="interest-icon" />
          <p className="h2-font white-font">Building Projects</p>
        </div>
        <div className="interest-box">
          <BsLaptop className="interest-icon" />
          <p className="h2-font white-font">Web Development</p>
        </div>
        <div className="interest-box">
          <FaRobot className="interest-icon" />
          <p className="h2-font white-font">Machine Learning</p>
        </div>
        <div className="interest-box">
          <FaPython className="interest-icon" />
          <p className="h2-font white-font">Programming With Python</p>
        </div>
        <div className="interest-box">
          <FaRegLightbulb className="interest-icon" />
          <p className="h2-font white-font">Exploring New Things</p>
        </div>
      </div>
    </div>
  );
};

export default Interest;
