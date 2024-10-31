import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {
  FaArrowRight,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";
import fgas from "../../Assets/Images/fgas.jpg";
import gasSafe from "../../Assets/Images/gasSafe.png";
import mcs from "../../Assets/Images/mcs.png";
import mitsubishi from "../../Assets/Images/Mitsubishi_Electric_logo.svg";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 48px 24px;
  max-width: 88vw;
  margin: 0 auto;
  border-radius: 24px;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    width: 100%;
    padding: 32px 16px;
    border-radius: 24px 24px 0 0;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 250px;
  animation: ${slideUp} 0.5s ease-out;
`;

const Heading = styled.h2`
  color: #e55d50;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 3px;
    background-color: #e55d50;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Icon = styled.span`
  margin-right: 12px;
  color: #e55d50;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  columns: 2;
  column-gap: 24px;
`;

const NavItem = styled.li`
  margin-bottom: 12px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  display: inline-block;

  &:hover {
    color: #e55d50;
    transform: translateX(5px);
  }
`;

const Button = styled.button`
  background-color: #e55d50;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: #c04b40;
    transform: scale(1.05);
  }
`;

const CertificationImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;

  @media (max-width: 768px) {
    order: 1;
    margin-top: 30px;
  }
`;

const CertificationImage = styled.img`
  height: 60px;
  width: auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const FooterBottom = styled.div`
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    order: 4;
  }
`;

const BusinessPartners = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const ExperienceText = styled.p`
  margin-top: 16px;

  @media (max-width: 768px) {
    order: 3;
  }
`;

const Copyright = styled.p`
  order: 3;

  @media (max-width: 768px) {
    order: 4;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Column>
          <Heading>Get in Touch</Heading>
          <br />
          <ContactInfo>
            <Icon>
              <FaBuilding />
            </Icon>
            <div>
              <strong>Company Number:</strong> 06554430
            </div>
          </ContactInfo>
          <ContactInfo>
            <Icon>
              <FaMapMarkerAlt />
            </Icon>
            <div>
              <strong>Registered Office:</strong>
              <br />
              Mill Gate, Greenodd
              <br />
              Ulverston, LA12 8HZ
            </div>
          </ContactInfo>
          <ContactInfo>
            <Icon>
              <FaPhone />
            </Icon>
            <div>
              <strong>Phone:</strong> 01695 423802
            </div>
          </ContactInfo>
        </Column>

        <Column>
          <Heading>Quick Links</Heading>
          <br />
          <NavList>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/aircon">Aircon</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/heat-pumps">Heat Pumps</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/service">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/heat-pumps">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Home">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/Contact">FAQ</NavLink>
            </NavItem>
          </NavList>
        </Column>

        <Column>
          <Heading>Get a Quote</Heading>
          <br />
          <p>Unlock your comfort with our expert solutions.</p>
          <br />
          <p>Get a free, no-obligation quote today!</p>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button style={{ marginTop: "20px" }}>
              Get Started Now
              <FaArrowRight style={{ marginLeft: "8px" }} />
            </Button>
          </Link>
        </Column>

        <Column>
          <Heading>Our Certifications</Heading>
          <br />
          <CertificationImages>
            <a
              href="https://fgasregister.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CertificationImage src={fgas} alt="FGAS Certification" />
            </a>
            <a
              href="https://www.gassaferegister.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CertificationImage src={gasSafe} alt="Gas Safe Certification" />
            </a>
            <a
              href="https://mcscertified.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CertificationImage src={mcs} alt="MCS Certification" />
            </a>
          </CertificationImages>
          <ExperienceText>Experience you can trust, since 2008.</ExperienceText>
        </Column>
      </FooterContent>

      <FooterBottom>
        <BusinessPartners>
          <span style={{ color: "#e55d50", fontWeight: "bold" }}>
            Business Partners:
          </span>
          <img
            src={mitsubishi}
            alt="Mitsubishi"
            style={{ height: "40px", width: "auto" }}
          />
        </BusinessPartners>
        <Copyright>&copy; 2024 Dalliam. All rights reserved.</Copyright>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
