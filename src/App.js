import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollTop.js"; // Ensure correct path for ScrollToTop component
import Home from "./Components/Home/Home"; // Check paths for all these components
import Aircon from "./Aircon/Aircon";
import HeatPumps from "./HeatPump/HeatPumps";
import Service from "./Service/Service";
import ContactPage from "./Components/ContactForm/ContactForm";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Add this above Routes */}
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
