import React from "react";
import { educationItems, experianceItems } from "../appData/data";

const Education = () => {
  return (
    <div className="education-main" id="education">
      <div className="h1-font">Education</div>
      <div className="education-sec">
        {educationItems.map((item, index) => (
          <div className="education-sec-item" key={`education:${index}`}>
            <p className="h2-font purple-font">{item.eType}</p>
            <p className="h3-bold-font">{item.eName}</p>
            <p className="education-item-date">{item.eYear}</p>
            <li className="h3-font">{item.eResult}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
