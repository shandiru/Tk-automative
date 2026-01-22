// App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GDPRBanner from "./components/GDPRBanner";
import Home from "./page/Home";
import TermsConditions from "./components/Term";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Diagnostics from "./page/Diagnostics";
import DPFEGRAdBlueSolutions from "./page/DPFEGRAdBlueSolutions";
import ECURemappingTuning from "./page/ECURemappingTuning";
import MechanicalRepairs from "./page/MechanicalRepairs";
import MotorsportRallyPreparation from "./page/MotorsportRallyPreparation";
import RollingRoadWheelDyno from "./page/RollingRoadWheelDyno";
import ScrollToHash from "../src/components/ScrollToHash"
function App() {
  useEffect(() => {
    // Initialize AOS once at app root
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <Router>
        <ScrollToHash />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/dpf-egr-adblue-solutions" element={<DPFEGRAdBlueSolutions />} />
        <Route path="/ecu-remapping-tuning" element={<ECURemappingTuning />} />
        <Route path="/mechanical-repairs" element={<MechanicalRepairs />} />
        <Route path="/motorsport-rally-preparation" element={<MotorsportRallyPreparation />} />
        <Route path="/rolling-road-wheel-dyno" element={<RollingRoadWheelDyno />} />
      </Routes>
      <Footer />
      <GDPRBanner />
    </Router>
  );
}

export default App;
