import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import profileImg from "../public/images/Preyansh_Profile.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { firstIntroHeadings } from "../appData/data";

const FirstIntro = () => {
  return (
    <div className="first-aboute-me-main" id="#">
      <Image
        alt="Profile Pic"
        src={profileImg}
        style={{
          height: "auto",
          width: "140px",
          margin: "0 15px",
          border: "solid white",
          borderRadius: "50%",
        }}
      />
      <p className="h1-font" style={{ margin: "14px" }}>
        Hello, {`I'm`} Preyansh Patel
      </p>
      <div className="h2-font">
        <Typewriter
          options={{
            strings: firstIntroHeadings,
            autoStart: true,
            loop: true,
            delay: 150
          }}
        />
      </div>
      <div style={{ marginTop: "15px" }}>
        <Link href="https://github.com/PatelPreyansh30" target="_blank">
          <BsGithub className="first-about-me-icons" />
        </Link>
        <Link href="https://www.linkedin.com/in/patelpreyansh/" target="_blank">
          <BsLinkedin className="first-about-me-icons" />
        </Link>
      </div>
    </div>
  );
};

export default FirstIntro;
