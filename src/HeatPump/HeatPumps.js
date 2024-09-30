import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./HeatPump.scss";
import ParticlesComponent from "../Components/Particles/particles";
import image1 from "../Assets/Images/1.jpg";
import image2 from "../Assets/Images/2.jpg";
import image3 from "../Assets/Images/3.jpg";
import image4 from "../Assets/Images/4.jpg";
import image5 from "../Assets/Images/5.jpg";
import image6 from "../Assets/Images/6.jpg";
import image7 from "../Assets/Images/7.jpg";
import image8 from "../Assets/Images/8.jpg";
import image9 from "../Assets/Images/9.jpeg";
import image10 from "../Assets/Images/10.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const HeatPumps = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        });
      });
      await Promise.all(promises);
      setIsLoaded(true);
    };

    preloadImages();
  }, []);

  return (
    <>
      <div>
        <ParticlesComponent id="particles" />
        <div className="navbar-container">
          <Navbar />
        </div>
        <div className="heat-pumps">
          <section className="heat-pump-card">
            <div className="heat-pump-content">
              <h2>Ground Source Heat Pumps</h2>
              <p>
                Imagine never having to worry about your heating bills again.
                Ground Source Heat Pumps provide consistent warmth, comfort, and
                energy efficiency by harnessing renewable energy from the
                ground. With minimal maintenance and zero harmful emissions,
                they are a long-term, eco-friendly, and cost-effective solution
                for your home.
              </p>
              <h3>Proven Technology</h3>
              <p>
                Used extensively in countries like Sweden, Ground Source Heat
                Pumps have proven efficiency and reliability.
              </p>
              <ul>
                <li>Save up to 70% annually on your heating bills</li>
                <li>25-year lifespan with no regular maintenance required</li>
                <li>Safe for the environment and family</li>
                <li>Ideal for underfloor heating</li>
              </ul>
            </div>
          </section>

          <section className="heat-pump-card">
            <div className="heat-pump-content">
              <h2>Air Source Heat Pumps</h2>
              <p>
                Air Source Heat Pumps are designed for easy installation and
                deliver substantial energy savings. They efficiently extract
                renewable energy from the air to heat your home, making them
                ideal for properties of all sizes, from apartments to large
                houses. With lower running costs and reduced carbon emissions,
                they offer a simple, green heating solution.
              </p>
              <h3>How It Works</h3>
              <p>
                An Air Source Heat Pump extracts heat from the outdoor air –
                even in freezing conditions – to warm your home.
              </p>
              <ul>
                <li>Reduce your energy consumption by 30% or more</li>
                <li>Minimal upkeep required</li>
                <li>Environmentally friendly, with reduced CO2 emissions</li>
                <li>Perfect for radiators and underfloor heating</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="cta-button-container">
          <Link to="/contact" className="cta-button">
            Get a FREE Quote
          </Link>
        </div>

        {isLoaded ? (
          <div
            className="slider"
            style={{
              "--width": "400px",
              "--height": "200px",
              "--quantity": 10,
            }}
          >
            <div className="list">
              {images.map((image, index) => (
                <div
                  className="item"
                  key={index}
                  style={{ "--position": index + 1 }}
                >
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}

        <div id="main-content">
          <div className="about-us">
            <div className="about-us-content">
              <h2>About Us</h2>
              <p>
                We are a proud family-run business based in West Lancashire,
                with a service area that extends across the North West of
                England and beyond. Our passion for cutting-edge water and space
                heating technologies drives us to offer solutions that benefit
                both our customers and the environment.
              </p>
              <p>
                At the heart of everything we do is a commitment to providing
                high-quality, energy-efficient heating systems that deliver
                long-term savings, enhanced comfort, and a smaller environmental
                footprint. We believe that investing in advanced heating
                technology isn't just a choice—it's the future of sustainable
                living.
              </p>
              <h3>Why Choose Us?</h3>
              <p>
                With years of experience, we specialize in the latest heating
                technologies, including highly efficient heat pumps like the
                <strong> Ecodan 18 </strong> and <strong> Ecodan 25</strong>.
                These systems offer significant energy savings and reduce your
                dependency on fossil fuels. In fact, heat pumps can reduce
                energy consumption by over 30%, making them a smart investment
                for any homeowner looking to reduce heating costs while lowering
                their carbon footprint.
              </p>
              <h3>Expertise You Can Rely On</h3>
              <p>
                When it comes to your home's heating system, trust is essential.
                We are passionate about delivering personalized service and
                expert advice to help you choose the best solution for your
                needs. Whether it's replacing an outdated gas boiler or
                exploring the benefits of heat pumps, we take the time to guide
                you through all the available options.
              </p>
              <h3>Cleaner, Greener Heating</h3>
              <p>
                Our advanced heat pump systems not only make your home more
                comfortable and cost-effective but also help protect the
                environment by cutting down on harmful emissions. By switching
                to a cleaner, renewable energy source, you'll contribute to a
                greener, more sustainable future—both inside and outside your
                home.
              </p>
              <h3>Our Promise</h3>
              <p>
                At the core of our business is a genuine desire to ensure our
                customers are happy, comfortable, and confident in their
                decision to work with us. We believe in the long-term benefits
                of modern heating technology and are committed to helping you
                experience those advantages.
              </p>
              <p>
                Have a question? We're here to help. Contact us anytime, and
                we'll be happy to assist you in finding the best solution for
                your home.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default HeatPumps;
