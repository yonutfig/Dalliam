import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import VideoCarousel from "../Caroussel/VideoCarousel";
import Navbar from "../Navbar/Navbar";

import airConditionerImg from "../../Assets/Images/air-conditioner-system-isolated-on-white-2023-11-27-05-07-20-utc-removebg-preview (1).png";
import heatPumpImg from "../../Assets/Images/heatpump-removebg-preview.png";
import servicesImg from "../../Assets/Images/female-employee-kneeling-near-air-conditioner-outd-2023-12-21-22-02-44-utc-removebg-preview (1).png";
import instagram from "../../Assets/Images/instagram (1).png";
import facebook from "../../Assets/Images/facebook (1).png";
import twitter from "../../Assets/Images/twitter.png";
import youtube from "../../Assets/Images/youtube.png";
import google from "../../Assets/Images/grew.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <VideoCarousel />

      <div className="home-container">
        <header className="hero-section">
          <h1>Your Comfort, Our Priority</h1>
          <p>
            Expert solutions in Aircon, Heat Pumps, and Home Services. Discover
            the difference with us.
          </p>
          <Link to="/contact" className="cta-button">
            Get a FREE Quote
          </Link>
        </header>

        <main className="main-content">
          <section className="feature">
            <div className="feature-image-container">
              <div className="color-square"></div>
              <img
                src={airConditionerImg}
                alt="Air Conditioning"
                className="feature-image"
              />
            </div>
            <div className="feature-content">
              <h2>Air Conditioning</h2>
              <p>
                Efficient and reliable air conditioning systems to keep your
                space comfortable all year round.
              </p>
              <Link to="/aircon" className="cta-link">
                Learn More{" "}
                <span>
                  <i className="fas fa-arrow-right icon"></i>
                </span>
              </Link>
            </div>
          </section>
          <section className="feature">
            <div className="feature-image-container">
              <div className="color-square"></div>
              <img
                src={heatPumpImg}
                alt="Heat Pumps"
                className="feature-image"
              />
            </div>
            <div className="feature-content">
              <h2>Heat Pumps</h2>
              <p>
                Innovative heat pump solutions for both heating and cooling,
                designed to save energy and costs.
              </p>
              <Link to="/heat-pumps" className="cta-link">
                Discover More{" "}
                <span>
                  <i className="fas fa-arrow-right icon"></i>
                </span>
              </Link>
            </div>
          </section>
          <section className="feature">
            <div className="feature-image-container">
              <div className="color-square"></div>
              <img
                src={servicesImg}
                alt="Our Services"
                className="feature-image"
              />
            </div>
            <div className="feature-content">
              <h2>Our Services</h2>
              <p>
                Comprehensive home services to meet all your needs with
                professionalism and expertise.
              </p>
              <Link to="/service" className="cta-link">
                Explore Services{" "}
                <span>
                  <i className="fas fa-arrow-right icon"></i>
                </span>
              </Link>
            </div>
          </section>
        </main>

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
                <Link to="/services">Services</Link>
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
              <span>
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
            <h1>Experience you can trust,since 2008. </h1>
          </div>
          <div className="footer-content">
            <p>&copy; 2024 Dalliam. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
