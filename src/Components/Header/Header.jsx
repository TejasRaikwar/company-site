import React, { useState, useEffect } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import HeroSlider from "../HeroSlider/HeroSlider";
import { heroSliderData } from "../../Data/HeroSliderData";

const Header = ({}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [bannerImage, setBannerImage] = useState(heroSliderData[0].background);

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
      <div
        className="header-inner-contaienr" style={{backgroundImage: `url(${bannerImage})`}}
      >
        <Navbar />
        <div className="hero-slider-container">
          <HeroSlider setBannerImage={setBannerImage}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
