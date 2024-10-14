import React from "react";
import "./AboutUs.css";
import { useParams } from "react-router-dom";
import routesConfig from "../../Routes/routes";
const AboutUs = () => {
  // const { id } = useParams();
  // const path = `about-us`;
  const { heading, subHeading, bannerImage } = routesConfig.AboutUs.content;
  console.log(bannerImage);
  return (
    <div className="about-us-page-main">
      <div className="about-us-page-inner">
        <div
          className="about-us-banner"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, cupiditate.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
