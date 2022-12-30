import React from "react";
import Link from "next/link";

const Projects = () => {
  const projectItems = [
    {
      title: "Expense Management System",
      technology: "Skills: VueJs, HTML, CSS, Axios",
      description:
        "This project was created at a hackathon. In this project, I create the frontend part of the web app in VueJS and I handle the API integration part.\n\nThis is used to track users finances efficiently and remind them of their budget on a daily basis.",
      liveLink: "https://github.com/PatelPreyansh30/expense-management-system",
    },
    {
      title: "Cybersec Club Website",
      technology: "Skills: ReactJs, HTML, CSS",
      description:
        "This website was created for the silver oak cybersec club organized by IEEE silver oak group.",
      liveLink: "https://ieee-sou-cybersec-event.web.app/",
    },
    {
      title: "IEEE SOU Website Updation",
      technology: "Skills: Debugging, VueJs, HTML, CSS, Firebase",
      description:
        "This website was created by our seniors and now we are tasked with updating this website and fixing bugs.",
      liveLink: "https://ieee-sou-cybersec-event.web.app/",
    },
  ];
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
