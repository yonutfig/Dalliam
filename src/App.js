import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Aircon from "./Aircon/Aircon";
import HeatPumps from "./HeatPump/HeatPumps";
import Service from "./Service/Service";
import ContactPage from "./Components/ContactForm/ContactForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aircon" element={<Aircon />} />
        <Route path="/heat-pumps" element={<HeatPumps />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
