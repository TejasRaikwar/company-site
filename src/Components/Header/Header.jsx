import React, { useState, useEffect } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar"
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="header-main-container">
      <div className="header-inner-contaienr">
          <Navbar />
      </div>
    </div>
  );
};

export default Header;
