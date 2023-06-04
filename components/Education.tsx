import React from "react";
import { educationItems, experianceItems } from "../appData/data";
import ExtraExperianceInfoPopup from "./ExtraExperianceInfoPopup";

const Education = () => {
  return (
    <div className="education-main" id="education">
      <div className="education-sec">
        <div className="h1-font">Experience</div>
        {experianceItems.map((item, index) => (
          <div
            className="education-sec-item"
            key={`experiance-item-index:${index}`}
          >
            <p className="h2-font purple-font">{item.position}</p>
            <p className="h3-bold-font">{item.company}</p>
            <p className="education-item-date">{item.duration}</p>
            {item.learnings.split("\n").map((learningItem, index) => (
              <li
                className="h3-font"
                key={`experiance-learning-item-index:${index}`}
              >
                {learningItem}
              </li>
            ))}
            <ExtraExperianceInfoPopup isCompleted={item.isCompleted} company={item.company} position={item.position} extraData={item.dairyData} />
          </div>
        ))}
      </div>
      <div className="education-sec">
        <div className="h1-font">Education</div>
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
