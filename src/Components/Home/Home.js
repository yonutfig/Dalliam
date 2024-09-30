import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import VideoCarousel from "../Caroussel/VideoCarousel";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import airConditionerImg from "../../Assets/Images/air-conditioner-system-isolated-on-white-2023-11-27-05-07-20-utc-removebg-preview (1).png";
import heatPumpImg from "../../Assets/Images/heatpump-removebg-preview.png";
import servicesImg from "../../Assets/Images/female-employee-kneeling-near-air-conditioner-outd-2023-12-21-22-02-44-utc-removebg-preview (1).png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          marginBottom: "200px",
          display: "flex",
        }}
      >
        <VideoCarousel />
      </div>
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
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
