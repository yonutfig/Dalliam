import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/Capture-removebg-preview.png";
import { FaPhone, FaArrowRight } from "react-icons/fa"; // Importing the phone and quote icons
import styled from "styled-components";

const NavbarContainer = styled.div`
  font-family: "Roboto", sans-serif;
`;

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 24px;
  width: 88vw;
  margin: 0 auto;
  height: 65px;
  margin-top: 20px;
`;

const LogoImage = styled.img`
  width: 200px;
  height: 80px;
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  font-size: 24px;
  font-family: "Playfair Display", serif;
  margin: 0; /* Ensure there's no margin */
  padding: 0; /* Ensure there's no padding */
  flex-wrap: nowrap; /* Prevent wrapping */
  justify-content: center;
  align-items: center;
`;

const NavbarLink = styled(Link)`
  color: #595959;
  text-decoration: none;
  font-weight: 550;
  transition: color 0.3s ease, border-bottom 0.3s ease; /* Add transition for color and border */

  &:hover {
    border-bottom: 2px solid #ff6f61;
    color: #ff6f61; /* Change text color on hover */
  }
`;

const QuoteButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #ff6f61;
  color: #fff;
  font-weight: 550;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: 5px;
  font-size: 24px;
  &:hover {
    background-color: #000;
    color: white;
    transform: scale(1.05);
  }

  svg {
    margin-left: 8px;
  }
`;

const CallButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: none;
  color: #ff6f61;
  font-weight: 550;
  text-decoration: none;
  transition: color 0.3s ease;
  margin-top: 5px;
  font-size: 24px;

  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const phoneNumber = "01695 423802";

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <div className="navbar-logo">
          <LogoImage src={logo} alt="Company Logo" />
        </div>
        <NavbarLinks>
          <li>
            <NavbarLink to="/">Home</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/aircon">Aircon</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/heat-pumps">Heat Pumps</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/service">Services</NavbarLink>
          </li>
          <li>
            <NavbarLink to="/contact">Contact</NavbarLink>
          </li>
          <li>
            <QuoteButton to="/get-a-quote">
              Get a Quote | <FaArrowRight />
            </QuoteButton>
          </li>
          <li>
            <CallButton href={`tel:${phoneNumber}`}>
              <FaPhone style={{ marginRight: "8px", color: "black" }} />{" "}
              {phoneNumber}
            </CallButton>
          </li>
        </NavbarLinks>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
