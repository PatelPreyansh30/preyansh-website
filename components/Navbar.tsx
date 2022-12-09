import Link from "next/link";
import React from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <Link href="#">{`Preyansh's Portfolio`}</Link>
      <div>
        <Link className="list-item" href="#">
          Home
        </Link>
        <Link className="list-item" href="#about">
          About
        </Link>
        <Link className="list-item" href="#contact">
          Contact
        </Link>
        <Link className="list-item" href="#interest">
          Interest
        </Link>
        <Link className="list-item" href="#projects">
          Projects
        </Link>
        <Link className="list-item" href="#education">
          Education
        </Link>
        <Link className="list-item" href="#certificates">
          Certificates
        </Link>
      </div>
      <BiMenu className="none" />
    </div>
  );
};

export default Navbar;
