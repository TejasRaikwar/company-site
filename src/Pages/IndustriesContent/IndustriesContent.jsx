import React, { useRef } from "react";
import "./IndustriesContent.css";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import routesConfig from "../../Routes/routes";

const IndustriesContent = () => {
  const { id } = useParams();
  const path = `industries/${id}`;
  const content = routesConfig.industries.find(
    (route) => route.path === path
  ).content;
  const benifits = content.benifits;
  const ourServices = content.ourServices;
  let isEven = false;

  return (
    <motion.div
      className="hero-main-container"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      {content.divs.map((key, index) => {
        isEven = !isEven;
        const dynamicFlexDirection = isEven
          ? { flexDirection: "row" }
          : { flexDirection: "row-reverse" };

        return (
          <div
            key={index}
            className="hero-inner-container"
            style={dynamicFlexDirection}
          >
            <div className="inner-left">
              <div className="industries-heading">{key.heading}</div>
              <hr />
              <span className="text-span">{key.text}</span>
              {key.text2 ? (
                <span className="text-span">{key.text2}</span>
              ) : null}
            </div>
            <div className="inner-right">
              <img src={`${key.image}`} alt="" />
            </div>
          </div>
        );
      })}
      <div className="b-main">
        <div className="b-inner">
          <div className="service-page-heading">{benifits.bheading}</div>
          <div className="b-div-cont">
            {benifits.breasons.map((key, index) => {
              return (
                <div key={index} className="b-div-item">
                  {key.icon}
                  <div className="service-rsn-block-heading">
                    {key.bheading}
                  </div>
                  {key.btext}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="b-main">
        <div className="our-ser">
          <div className="service-page-heading">{ourServices.heading}</div>
          <div className="b-div-cont">
          {ourServices.services.map((key, index) => {
              return (
                <div key={index} className="b-div-item">
                  {key.icon}
                  <div className="service-rsn-block-heading c-mrn">
                    {key.heading}
                  </div>
                  {key.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IndustriesContent;
