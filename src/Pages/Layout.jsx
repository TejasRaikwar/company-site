import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  const location = useLocation();
  const isNav = location.pathname !== "/";
  return (
    <>
      <div className="main-body">
        {isNav && <Navbar />}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
