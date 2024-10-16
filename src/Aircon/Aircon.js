import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Slider from "../Components/Slider/Slider";
import SliderExtra from "../Components/AirConInfo/AirConInfo";

const Aircon = () => {
  return (
    <>
      <div className="navbar-style" style={{ marginBottom: "20px" }}>
        <Navbar />
      </div>
      <div
        style={{
          margin: "50px 0",
          width: "100vw",
          minHeight: "calc(100vh - 200px)",
        }}
      >
        <Slider />
      </div>
      <div
        style={{
          margin: "100px 0",
          display: "flex",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <SliderExtra />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default Aircon;
