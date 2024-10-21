import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaClock,
  FaPhone,
} from "react-icons/fa";

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 46px;
  width: 100vw;
  background-color: black;
  color: white;

  @media (max-width: 768px), (orientation: landscape) and (max-height: 768px) {
    display: none;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-right: 60px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: 100px !important;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 20px;
  text-decoration: none;
  position: relative;
  right: 50px;
  &:hover {
    color: #ccc;
  }
`;

const Header = () => {
  const phoneNumber = "01695 423802";

  return (
    <HeaderTop>
      <LeftSection>
        <div>
          <FaClock style={{ marginLeft: "50px" }} />
          <span style={{ marginLeft: "5px" }}>Mon-Fri: 9 AM - 5 PM</span>
        </div>
        <div>
          <a
            href="mailto:info@Dalliam.co.uk"
            style={{ color: "white", textDecoration: "none" }}
          >
            <span>Email: info@Dalliam.co.uk</span>
          </a>
        </div>
        <div>
          <FaPhone style={{ marginLeft: "20px" }} />
          <a
            href={`tel:${phoneNumber}`}
            style={{
              color: "white",
              textDecoration: "none",
              marginLeft: "5px",
            }}
          >
            {phoneNumber}
          </a>
        </div>
      </LeftSection>
      <RightSection>
        <SocialIcon
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </SocialIcon>
        <SocialIcon
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </SocialIcon>
        <SocialIcon
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </SocialIcon>
      </RightSection>
    </HeaderTop>
  );
};

export default Header;
