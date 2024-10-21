import instagram from "../../Assets/Images/instagram (1).png";
import facebook from "../../Assets/Images/facebook (1).png";
import twitter from "../../Assets/Images/twitter.png";
import youtube from "../../Assets/Images/youtube.png";
import google from "../../Assets/Images/grew.png";
import fgas from "../../Assets/Images/fgas.jpg";
import gasSafe from "../../Assets/Images/gasSafe.png";
import mcs from "../../Assets/Images/mcs.png";
import { Link } from "react-router-dom";
import "./Footer.css";
import styled from "styled-components";

const CertificationImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

const CertificationImage = styled.img`
  height: 50px;
  width: auto;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
const Footer = () => {
  return (
    <footer className="footer">
      <div className="get-in-touch">
        <h2>Get in Touch</h2>
        <p>
          <strong>Company Number:</strong> 06554430
        </p>
        <p>
          <strong>Registered Office:</strong>
          <br />
          Mill Gate
          <br />
          Greenodd
          <br />
          Ulverston
          <br />
          LA12 8HZ
        </p>
        <p>
          <strong>Phone:</strong> 01695 423802
        </p>
      </div>

      <div className="explore">
        <h2>Explore</h2>
        <ul>
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
      </div>

      <div className="Quote">
        <h3>Unlock your comfort.</h3>
        <h3> Get a free quote today!</h3>
        <div className="quote-button">
          <button>Get Started Now</button>
          <span className="google-img">
            <img src={google} alt="Google Reviews" />
          </span>
        </div>
      </div>

      <div className="square1">
        <div className="favicon">
          <img src={facebook} alt="Bogdan Rosu" />
        </div>
        <div className="favicon">
          <img src={instagram} alt="Freepik" />
        </div>
        <div className="favicon">
          <img src={youtube} alt="Freepik" />
        </div>
        <div className="favicon">
          <img src={twitter} alt="Freepik" />
        </div>
      </div>
      <div className="square2">
        <h3>
          Thanks for scrolling with us <span>!</span>
        </h3>
      </div>
      <div className="trust">
        <h1>Experience you can trust, since 2008.</h1>
        <CertificationImagesContainer>
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
        </CertificationImagesContainer>
      </div>
      <div className="footer-content">
        <p>&copy; 2024 Dalliam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
