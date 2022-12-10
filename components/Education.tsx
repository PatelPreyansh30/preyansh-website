import React from "react";

const educationItems = [
  {
    eType: "Bachelor Of Technology In Computer Engineering With AI-ML",
    eName: "Silver Oak University, Gota, Ahmedabad",
    eYear: "2020-2024",
    eResult: "CPI: 9.1 (In 5th Semester)",
  },
  {
    eType: "12th(HSC) - PCM",
    eName: "Gyanda Girls High School, Ghatlodiya, Ahmedabad",
    eYear: "2019-2020",
    eResult: "Percentile Rank: 88.39",
  },
  {
    eType: "12th(SSC)",
    eName: "Gyanda Girls High School, Ghatlodiya, Ahmedabad",
    eYear: "2017-2018",
    eResult: "Percentile Rank: 98.37",
  },
];

const Education = () => {
  return (
    <div className="education-main" id="education">
      <div className="education-sec">
        <div className="h1-font">Experience</div>
        <div className="education-sec-item">
          <p className="h2-font purple-font">ReactJS Developer Intern</p>
          <p className="h3-bold-font">Oyebusy Pvt. Ltd.</p>
          <p className="education-item-date">AUGUST-2022, PRESENT</p>
          <li className="h3-font">
            During the training period of internship, I learn ReactJs in detail
            and gain knowledge of other library like Material UI, Redux, Redux
            Toolkit, etc.
          </li>
          <li className="h3-font">
            In this I worked on Admin Panel of the company and create UI based
            on Figma, create reuseful components, how to manage state for web
            app.
          </li>
        </div>
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
