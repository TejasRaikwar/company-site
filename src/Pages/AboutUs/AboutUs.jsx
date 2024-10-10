import React from "react";
import "./AboutUs.css";
import { useParams } from "react-router-dom";
import routesConfig from "../../Routes/routes";
const AboutUs = () => {
  // const { id } = useParams();
  // const path = `about-us`;
  const { heading, subHeading } = routesConfig.AboutUs.content;
  console.log(subHeading);
  return (
    <div>
      {heading}
    </div>
  );
};

export default AboutUs;
