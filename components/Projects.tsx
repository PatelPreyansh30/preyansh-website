import React from "react";
import Image from "next/image";
import Link from "next/link";
import cybersecClubWebsiteImg from "../public/images/project1.png";

const Projects = () => {
  const projectItems = [
    {
      title: "Cybersec Club Website",
      technology: "Using ReactJs, HTML, CSS",
      liveLink: "",
      image: cybersecClubWebsiteImg,
    },
    {
      title: "Cybersec Club Website",
      technology: "Using ReactJs, HTML, CSS",
      liveLink: "",
      image: cybersecClubWebsiteImg,
    },
    {
      title: "Cybersec Club Website",
      technology: "Using ReactJs, HTML, CSS",
      liveLink: "",
      image: cybersecClubWebsiteImg,
    },
    {
      title: "Cybersec Club Website",
      technology: "Using ReactJs, HTML, CSS",
      liveLink: "",
      image: cybersecClubWebsiteImg,
    },
    {
      title: "Cybersec Club Website",
      technology: "Using ReactJs, HTML, CSS",
      liveLink: "",
      image: cybersecClubWebsiteImg,
    },
  ];
  return (
    <div id="projects" className="project-sec-main">
      <p className="h1-font" style={{ margin: "20px" }}>
        Projects
      </p>
      <div className="flex align-items-center justify-content-center overflow-auto">
        {projectItems.map((item, index) => (
          <div className="project-item-card" key={`projects:${index}`}>
            <p className="project-item-heading">{item.title}</p>
            <p className="font-semibold">{item.technology}</p>
            <Link
              href={item.liveLink}
              target="_blank"
              className="project-item-link"
            >
              Live Demo
            </Link>
            <Image
              src={item.image}
              alt={item.title}
              className="project-item-img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
