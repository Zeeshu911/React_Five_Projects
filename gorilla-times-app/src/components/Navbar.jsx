import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ filterNews }) => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">
        <img src="/logo-without-bg.png" alt="logo" />
      </div>
      <ul className={show ? "show": ""}>
        <li onClick={() => filterNews("everything")}>ALL</li>
        <li onClick={() => filterNews("business")}>BUSINESS</li>
        <li onClick={() => filterNews("entertainment")}>ENTERTAINMENT</li>
        <li onClick={() => filterNews("general")}>GENERAL</li>
        <li onClick={() => filterNews("health")}>HEALTH</li>
        <li onClick={() => filterNews("science")}>SCIENCE</li>
        <li onClick={() => filterNews("sports")}>SPORTS</li>
        <li onClick={() => filterNews("technology")}>TECHNOLOGY</li>
      </ul>
      <GiHamburgerMenu onClick={() => setShow(!show)} />
    </nav>
  );
};

export default Navbar;
