import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  const location = useLocation();
  const isNav = location.pathname !== "/";
  return (
    <>
      <div className="main-body">
        {isNav && <Navbar />}
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
