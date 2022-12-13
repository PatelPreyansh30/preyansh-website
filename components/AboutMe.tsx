import React from "react";

const skillSet = [
  {
    label: "JavaScript",
    level: "90",
  },
  {
    label: "TypeScript",
    level: "80",
  },
  {
    label: "Python",
    level: "85",
  },
  {
    label: "HTML",
    level: "95",
  },
  {
    label: "CSS",
    level: "90",
  },
  {
    label: "ReactJS",
    level: "90",
  },
  {
    label: "Redux",
    level: "85",
  },
  {
    label: "NextJS",
    level: "95",
  },
  {
    label: "Flask",
    level: "95",
  },
  {
    label: "MySQL",
    level: "90",
  },
];

const AboutMe = () => {
  return (
    <div id="about" className="aboutme-main">
      <p className="h1-font">About Me</p>
      <p>{`I am Preyansh Patel from Ahmedabad, Gujarat and I have to pursue my b.tech degree from a Silver Oak University, Ahmedabad in the branch of Computer Engineering with Ai/Ml`}</p>
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
