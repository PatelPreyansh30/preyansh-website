import Link from "next/link";
import React from "react";
import { items } from "./Navbar";

const MobileNavbar = (props: { toggleMobileNavbar: any }) => {
  return (
    <div className="mobile-navbar-main">
      {items.map((item) => (
        <Link
          className="list-item"
          href={item.link}
          key={item.label}
          style={{ padding: "5px" }}
          onClick={props.toggleMobileNavbar}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default MobileNavbar;
