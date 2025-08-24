import React from "react";
import { experianceItems } from "../appData/data";

const Experience = () => {
  return (
    <div className="experiance-main" id="experiance">
      <div className="experiance-sec">
        <div className="h1-font">Experience</div>
        {experianceItems.map((item, index) => (
          <div
            className="experiance-sec-item"
            key={`experiance-item-index:${index}`}
          >
            <p className="h2-font purple-font">{item.position}</p>
            <p className="h3-bold-font">{item.company}</p>
            <p className="experiance-item-date">{item.duration}</p>
            {item.learnings.split("\n").map((learningItem, index) => (
              <li
                className="h3-font"
                key={`experiance-learning-item-index:${index}`}
              >
                {learningItem}
              </li>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
