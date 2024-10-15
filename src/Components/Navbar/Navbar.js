import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/Capture-removebg-preview.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Company Logo" className="logo-image" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul className={`navbar-links ${menuActive ? "active" : ""}`}>
          <div className="close-icon" onClick={toggleMenu}>
            &times;
          </div>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/aircon" onClick={toggleMenu}>
              Aircon
            </Link>
          </li>
          <li>
            <Link to="/heat-pumps" onClick={toggleMenu}>
              Heat Pumps
            </Link>
          </li>
          <li>
            <Link to="/service" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
