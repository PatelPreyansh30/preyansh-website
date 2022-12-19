import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="flex">
        <Link
          href="https://github.com/PatelPreyansh30"
          className="footer-icons"
          target="_blank"
        >
          <BsGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/patelpreyansh/"
          className="footer-icons"
          target="_blank"
        >
          <BsLinkedin />
        </Link>
        <Link
          href="https://twitter.com/PPreyansh"
          className="footer-icons"
          target="_blank"
        >
          <BsTwitter />
        </Link>
      </div>
      <hr />
      <div>
        <p className="h3-font">
          &#169; 2022 Personal Portfolio. All rights reserved | Designed & Maintained by
          Preyansh Patel
        </p>
      </div>
    </div>
  );
};

export default Footer;
