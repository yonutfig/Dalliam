import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Slider from "../Components/Slider/Slider";
import SliderExtra from "../Components/AirConInfo/AirConInfo";

const Aircon = () => {
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Navbar />
      </div>
      <div style={{ margin: "50px 0", width: "100vw", height: "100wh" }}>
        <Slider />
      </div>
      <div
        style={{
          margin: "100px 0",
          display: "flex",
          alignItems: "center",
          height: "100wh",
          width: "100vw",
        }}
      >
        <SliderExtra />
      </div>
      <div style={{ marginBottom: "60px" }}>
        <Footer />
      </div>
    </>
  );
};

export default Aircon;
