import Link from "next/link";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import MobileNavbar from "./MobileNavbar";

export const items = [
  { label: "Home", link: "#" },
  { label: "About", link: "#about" },
  { label: "Contact", link: "#contact" },
  { label: "Interest", link: "#interest" },
  { label: "Projects", link: "#projects" },
  { label: "Education", link: "#education" },
  { label: "Certificates", link: "#certificates" },
];

const Navbar = () => {
  const [toggleMobileNavbar, setToggleMobileNavbar] = useState(false);

  return (
    <div className="navbar-main">
      <Link href="#">{`Preyansh's Portfolio`}</Link>
      <div className="navbar-item">
        {items.map((item) => (
          <Link className="list-item" href={item.link} key={item.label}>
            {item.label}
          </Link>
        ))}
      </div>
      {toggleMobileNavbar && (
        <MobileNavbar
          toggleMobileNavbar={() => setToggleMobileNavbar(false)}
        />
      )}
      <BiMenu
        className="menu-icon"
        onClick={() => setToggleMobileNavbar(!toggleMobileNavbar)}
      />
    </div>
  );
};

export default Navbar;
