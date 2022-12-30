import React from "react";
import Link from "next/link";
import { projectItems } from "../appData/data";

const Projects = () => {
  return (
    <div id="projects" className="project-sec-main">
      <p className="h1-font" style={{ margin: "20px" }}>
        Projects
      </p>
      <div className="flex flex-direction-column">
        {projectItems.map((item, index) => (
          <div className="project-sec-item-box" key={`projectItems:${index}`}>
            <p className="h2-font purple-font">{item.title}</p>
            {item.description.split("\n").map((itemDesc, indexDesc) => (
              <p className="h3-font" key={`description:${indexDesc}`}>
                {itemDesc}
              </p>
            ))}
            <p className="education-item-date">{item.technology}</p>
            <Link
              href={item.liveLink}
              target="_blank"
              className="project-card-link"
            >
              Show More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
