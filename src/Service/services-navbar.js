import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/Capture-removebg-preview.png";
import { FaPhone, FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
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
  position: relative;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const LogoImage = styled.img`
  width: 200px;
  height: 80px;

  @media (max-width: 768px) {
    width: 150px;
    height: auto;
  }
`;

const NavbarLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  font-size: 24px;
  font-family: "Playfair Display", serif;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 65px;
    left: 0;
    background: white;
    width: 100%;
    padding: 1rem;
    z-index: 1000;
    font-size: 20px;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    font-size: 18px;
  }
`;

const NavbarListItem = styled.li`
  margin-bottom: 10px;
  margin-left: 5px;
  width: max-content;

  @media (max-width: 768px) and (orientation: landscape) {
    display: flex;
    margin-bottom: 8px;
  }
`;

const NavbarLink = styled(Link)`
  color: #595959;
  text-decoration: none;
  font-weight: 550;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  font-size: 24px;

  &:hover {
    border-bottom: 2px solid #ff6f61;
    color: #ff6f61;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0.5rem 0;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    font-size: 18px;
  }
  @media (max-width: 940px) and (max-height: 440px) {
    margin-left: 10px;
    text-align: center;
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

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0.5rem;
  }

  @media (max-width: 940px) and (max-height: 440px) {
    display: none;
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

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 0.5rem;
  }

  @media (max-width: 940px) and (max-height: 440px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 28px;
  color: #ff6f61;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "01695 423802";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <div className="navbar-logo">
          <LogoImage src={logo} alt="Company Logo" />
        </div>
        <HamburgerButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </HamburgerButton>
        <NavbarLinks isOpen={isMenuOpen}>
          <NavbarListItem>
            <NavbarLink to="/">Home</NavbarLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavbarLink to="/aircon">Aircon</NavbarLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavbarLink to="/heat-pumps">Heat Pumps</NavbarLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavbarLink to="/service">Services</NavbarLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavbarLink to="/contact">Contact</NavbarLink>
          </NavbarListItem>
          <NavbarListItem>
            <QuoteButton className="quote-button" to="/get-a-quote">
              Get a Quote | <FaArrowRight />
            </QuoteButton>
          </NavbarListItem>
          <NavbarListItem>
            <CallButton className="call-button" href={`tel:${phoneNumber}`}>
              <FaPhone style={{ marginRight: "8px", color: "black" }} />
              {phoneNumber}
            </CallButton>
          </NavbarListItem>
        </NavbarLinks>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
