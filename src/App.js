import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUsScreen from "./screens/contact_us/screens/ContactUsScreen";
import FAQ_Screen from "./screens/faq/screens/FAQ_Screen";
import BrandPulse from "./screens/Homepage/screen/BrandPulse";
import HomePage from "./screens/Homepage/screen/HomePage";
import AboutUsScreen from "./screens/about/screens/AboutUsScreen";
import GlobalNetworkScreen from "./screens/global_network/screens/GlobalNetworkScreen";
import Aerofly from "./screens/Homepage/screen/Aerofly";
import Khmergate from "./screens/Homepage/screen/Khmergate";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Set the initial route to HomePage */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Other routes */}
          <Route path="/contact-us" element={<ContactUsScreen />} />
          <Route path="/faq" element={<FAQ_Screen />} />
          <Route path="/about" element={<AboutUsScreen />} />
          <Route path="/global-network" element={<GlobalNetworkScreen />} />
          <Route path="/aerofly" element={<Aerofly />} />
          <Route path="/khmergate" element={<Khmergate />} />
        </Routes>
        {/* Static component like BrandPulse can be placed here if needed */}
        {/* <BrandPulse /> */}
      </div>
    </Router>
  );
}

export default App;
