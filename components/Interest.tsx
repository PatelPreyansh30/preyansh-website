import React, { ReactNode } from "react";
import { FaRegLightbulb, FaMagic, FaRobot, FaPython } from "react-icons/fa";
import { BsLaptop } from "react-icons/bs";

const Interest = () => {
  const interestItems: { label: string; component: ReactNode }[] = [
    {
      label: "Building Projects",
      component: <FaMagic className="interest-icon" />,
    },
    {
      label: "Web Development",
      component: <BsLaptop className="interest-icon" />,
    },
    {
      label: "Machine Learning",
      component: <FaRobot className="interest-icon" />,
    },
    {
      label: "Programming With Python",
      component: <FaPython className="interest-icon" />,
    },
    {
      label: "Exploring New Things",
      component: <FaRegLightbulb className="interest-icon" />,
    },
  ];

  return (
    <div className="interest-main-section" id="interest">
      <p className="h1-font" style={{ marginBottom: "20px" }}>
        Interest
      </p>
      <div className="flex flex-wrap justify-content-center">
        {interestItems.map((item, index) => (
          <div className="interest-box" key={`interest:${index}`}>
            {item.component}
            <p className="h2-font white-font">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interest;
