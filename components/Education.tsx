import React from "react";

const Education = () => {
  return (
    <div className="education-main" id="education">
      <div className="education-sec">
        <div className="h1-font" style={{ paddingBottom: "10px" }}>
          Experience
        </div>
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
        <div className="h1-font" style={{ paddingBottom: "10px" }}>
          Education
        </div>
        <div className="education-sec-item">
          <p className="h2-font purple-font">
            Bachelor Of Technology In Computer Engineering With AI-ML
          </p>
          <p className="h3-bold-font">Silver Oak University, Gota, Ahmedabad</p>
          <p className="education-item-date">2020-2024</p>
          <li className="h3-font">CPI: 9.1 (In 5th Semester)</li>
        </div>
        <div className="education-sec-item">
          <p className="h2-font purple-font">12th(HSC) - PCM</p>
          <p className="h3-bold-font">
            Gyanda Girls High School, Ghatlodiya, Ahmedabad
          </p>
          <p className="education-item-date">2019-2020</p>
          <li className="h3-font">Percentile Rank: 88.39</li>
        </div>
        <div className="education-sec-item">
          <p className="h2-font purple-font">12th(SSC)</p>
          <p className="h3-bold-font">
            Gyanda Girls High School, Ghatlodiya, Ahmedabad
          </p>
          <p className="education-item-date">2017-2018</p>
          <li className="h3-font">Percentile Rank: 98.37</li>
        </div>
      </div>
    </div>
  );
};

export default Education;
