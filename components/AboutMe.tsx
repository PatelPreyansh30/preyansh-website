import React from "react";
import { skillSet } from "../appData/data";

const AboutMe = () => {
  return (
    <div id="about" className="aboutme-main">
      <p className="h1-font">About Me</p>
      <p className="mb-15">
        I am a passionate Full Stack Developer with experience in building
        scalable, user-friendly, and impactful applications. My journey started
        with internships in PHP/Magento and React.js, and now I’m working at
        Tata Consultancy Services (TCS), specializing in Angular ⚡ (frontend)
        and Spring Boot ☕ (backend).
      </p>
      <p>💡 What I Do:</p>
      <li>🌐 Build responsive, interactive web applications</li>
      <li>🛠️ Develop RESTful APIs & microservices</li>
      <li>🎨 Create smooth, intuitive user experiences</li>
      <li className="mb-15">
        ⚙️ Optimize performance & write clean, maintainable code
      </li>
      <p>🧰 Tech Stack:</p>
      <li>Frontend: Angular, React.js, Vue.js, JavaScript (ES6+), HTML, CSS</li>
      <li>Backend: Spring Boot, Python (Flask), PHP, Magento</li>
      <li>Databases: MySQL, PostgreSQL, Oracle</li>
      <li className="mb-15">Tools: Git, CI/CD, Agile/Scrum</li>
      <p>
        🌱 Always eager to learn new technologies, take on challenges, and
        contribute to building innovative software solutions.
      </p>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* {skillSet.map((item, index) => (
          <div className="aboute-me-skill-box" key={index}>
            <p>{item.label}</p>
            <div className="aboute-me-skill-full-width">
              <div
                className={`aboute-me-skill-width width-${item.level}`}
              >{`${item.level}%`}</div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default AboutMe;
