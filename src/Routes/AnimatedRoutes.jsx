import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../Pages/Layout";
import Homepage from "../Pages/Homepage/Homepage";
import ServicesContent from "../Pages/ServicesContent/ServicesContent";
import AboutUs from "../Pages/AboutUs/AboutUs";
import NoPage from "../Pages/NoPage/NoPage";
import TechnologiesContent from "../Pages/TechnologiesContent/TechnologiesContent";
import IndustriesContent from "../Pages/IndustriesContent/IndustriesContent";
import Solutions from "../Pages/Solutions/Solutions";

// FramerMotion
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="services/:id" element={<ServicesContent />} />
          <Route path="technologies/:id" element={<TechnologiesContent />} />
          <Route path="industries/:id" element={<IndustriesContent />} />
          {/* <Route path="about-us/:id" element={<AboutUs />} /> */}
          <Route path="about-us" element={<AboutUs />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
