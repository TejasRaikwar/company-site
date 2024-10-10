import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../assets/ISRI-LOGO.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import useWindowDimensions from "./../Hooks/WindowDimensions/useWindowDimensions";
import SubNav from "./SubNav/SubNav";
import AboutUs from "./AboutUS/AboutUs";
import Industries from "./Industries/Industries";
// import Technologies from "./Technologies/Technologies";
import Services from "./Services/Services";
import useScrolled from "../Hooks/WindowDimensions/useScrolled";

const Navbar = () => {
  const isScrolled = useScrolled();
  const location = useLocation();
  const isHome = location.pathname !== "/";
  const [dropdownNav, setDropdownNav] = useState(false);
  const { width } = useWindowDimensions();

  const toggleDropdown = () => {
    setDropdownNav(!dropdownNav);
  };

  useEffect(() => {
    function handleToggleService() {
      if (width >= 1090) {
        setDropdownNav(false);
      }
    }
    window.addEventListener("resize", handleToggleService);
  }, [width]);

  return (
    <div className={`nav-main ${isScrolled ? "nav-fixed" : ''}`}>
      <nav className={`navbar ${isScrolled ? "navbar-fixed" : ''} ${isHome ? "navbar-fixed" : ''}`}>
        <Link to="/">
          <div
            className="com-logo"
            style={{ marginLeft: "10px", cursor: "pointer" }}
          >
            <img src={Logo} alt="ISRI Logo" className="isri-logo" height={45} />
          </div>
        </Link>
        <div className="nav-links">
          <ul className={`nav-links-items ${isScrolled ? "scrolled" : ""} ${isHome ? "scrolled" : ""}`}>
            <li>
              SERVICES
              <Services />
            </li>
            {/* <li>
              TECHNOLOGIES
              <Technologies />
            </li>  */}
            <li>
              INDUSTRIES
              <Industries />
            </li>
            <li>
              <Link to="solutions">SOLUTIONS</Link>
            </li>
            <li>
              <Link to="about-us">ABOUT US</Link>
              {/* <AboutUs /> */}
            </li>
          </ul>
        </div>
        <div className="mobile-ham-icon" onClick={toggleDropdown}>
          {dropdownNav ? (
            <AiOutlineClose size={25} className="rotetateclose" />
          ) : (
            <GiHamburgerMenu size={25} />
          )}
        </div>
      </nav>
      {dropdownNav ? <SubNav toggleNavbar={toggleDropdown} /> : null}
    </div>
  );
};

export default Navbar;
