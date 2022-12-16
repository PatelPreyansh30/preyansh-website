import React, { useState } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { items } from "../appData/data";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [toggleMobileNavbar, setToggleMobileNavbar] = useState(false);

  return (
    <div className="navbar-main">
      <Link
        href="#"
        style={{ fontSize: "19px" }}
        onClick={() => setToggleMobileNavbar(false)}
      >{`Preyansh's Portfolio`}</Link>
      <div className="navbar-item">
        {items.map((item) => (
          <Link className="list-item" href={item.link} key={item.label}>
            {item.label}
          </Link>
        ))}
      </div>
      {toggleMobileNavbar && (
        <MobileNavbar toggleMobileNavbar={() => setToggleMobileNavbar(false)} />
      )}
      <BiMenu
        className="menu-icon"
        onClick={() => setToggleMobileNavbar(!toggleMobileNavbar)}
      />
    </div>
  );
};

export default Navbar;
