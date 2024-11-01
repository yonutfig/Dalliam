import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";
import styled from "styled-components";
import fgas from "../../Assets/Images/fgas.jpg";
import gasSafe from "../../Assets/Images/gasSafe.png";
import mcs from "../../Assets/Images/mcs.png";
import mitsubishi from "../../Assets/Images/Mitsubishi_Electric_logo.svg";

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  padding: 48px 24px;
  width: 88vw;
  margin: 0 auto;
  border-radius: 24px 24px 0 0;

  @media (max-width: 768px) {
    padding: 32px 16px;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 48px;
  justify-content: space-between;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FooterHeading = styled.h2`
  color: #e55d50;
  font-size: 24px;
  font-weight: bold;
  position: relative;
  margin-bottom: 16px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 40px;
    height: 3px;
    background-color: #e55d50;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const QuickLinks = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #e55d50;
    transform: translateX(5px);
  }
`;

const QuoteButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: #e55d50;
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #c04b40;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    width: max-content;
  }
`;

const CertificationGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const CertificationLink = styled.a`
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const FooterBottom = styled.div`
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #444;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

const BusinessPartners = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterGrid>
        <FooterSection>
          <FooterHeading>Get in Touch</FooterHeading>
          <ContactInfo>
            <FaBuilding style={{ color: "#e55d50", flexShrink: 0 }} />
            <div>
              <strong>Company Number:</strong> 06554430
            </div>
          </ContactInfo>
          <ContactInfo>
            <FaMapMarkerAlt style={{ color: "#e55d50", flexShrink: 0 }} />
            <div>
              <strong>Registered Office:</strong>
              <br />
              Mill Gate, Greenodd
              <br />
              Ulverston, LA12 8HZ
            </div>
          </ContactInfo>
          <ContactInfo>
            <FaPhone style={{ color: "#e55d50", flexShrink: 0 }} />
            <div>
              <strong>Phone:</strong> 01695 423802
            </div>
          </ContactInfo>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Quick Links</FooterHeading>
          <QuickLinks>
            {[
              "Home",
              "Aircon",
              "Heat Pumps",
              "Services",
              "Contact",
              "About Us",
              "Projects",
              "FAQ",
            ].map((item) => (
              <StyledLink
                key={item}
                to={`/${item.toLowerCase().replace(" ", "-")}`}
              >
                {item}
              </StyledLink>
            ))}
          </QuickLinks>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Get a Quote</FooterHeading>
          <p>Unlock your comfort with our expert solutions.</p>
          <p>Get a free, no-obligation quote today!</p>
          <QuoteButton to="/contact">
            Get Started Now
            <FaArrowRight style={{ marginLeft: "12px" }} />
          </QuoteButton>
        </FooterSection>

        <FooterSection>
          <FooterHeading>Our Certifications</FooterHeading>
          <CertificationGrid>
            {[
              {
                src: fgas,
                alt: "FGAS Certification",
                href: "https://fgasregister.com/",
              },
              {
                src: gasSafe,
                alt: "Gas Safe Certification",
                href: "https://www.gassaferegister.co.uk/",
              },
              {
                src: mcs,
                alt: "MCS Certification",
                href: "https://mcscertified.com/",
              },
            ].map((cert) => (
              <CertificationLink
                key={cert.alt}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  style={{ height: "60px", width: "auto" }}
                />
              </CertificationLink>
            ))}
          </CertificationGrid>
          <p>Experience you can trust, since 2008.</p>
        </FooterSection>
      </FooterGrid>

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
        <p>&copy; 2024 Dalliam. All rights reserved.</p>
      </FooterBottom>
    </FooterWrapper>
  );
}
