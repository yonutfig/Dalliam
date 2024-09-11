import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/Capture-removebg-preview.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Company Logo" className="logo-image" />
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aircon">Aircon</Link>
          </li>
          <li>
            <Link to="/heat-pumps">Heat Pumps</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
