import React, { useEffect, useRef } from "react";
import "./AboutUs.css";
import { useParams } from "react-router-dom";
import routesConfig from "../../Routes/routes";
import { OurCoreValues } from "../../Data/OurCoreValues";
// import { motion, useInView, useAnimation } from "framer-motion";
const AboutUs = () => {
  // const { id } = useParams();
  // const path = `about-us`;
  const { bannerImage, portFolioImg } = routesConfig.AboutUs.content;

  return (
    <div className="about-us-page-main">
      <div className="about-us-page-inner">
        <div className="about-us-team">
          <div className="team-left">
            <div className="service-page-heading">Team</div>
            <div className="about-sub-txt">
              Our founders have successfully delivered strategy and
              implementation projects related to SharePoint Migration,
              Optimization, SharePoint Development, SharePoint Intranet Portals
              and multiple application support projects. Team have been involved
              in Banking, Manufacturing, Government, Medical & Health Care,
              Automation, Logistics, Legal, Real-estate etc.
            </div>
          </div>
          <div className="team-right">
            <img src={bannerImage} alt="" />
          </div>
        </div>
        <div className="about-us-growth">
          <div className="service-page-heading">Growth</div>
          <div className="about-sub-txt">
            Since its start as a Two-person IT team in Mumbai, ISRI has rapidly
            grown into a leading IT services firm with over 150 employees. Our
            team monitors mission-critical global IT applications and provides
            advanced analytics consulting to key decision-makers. At ISRI, we
            believe we are in the people business—the talent and dedication of
            our employees drive our success. By fostering a culture of
            collaboration and innovation, we deliver cutting-edge solutions,
            build lasting relationships, and confidently help clients navigate
            complex IT challenges.
          </div>
        </div>
        <div className="about-us-bp">
          <div className="service-page-heading">Bussiness Portfolio</div>
          <div className="bussiness-img">
            <img src={portFolioImg} alt="Image" />
          </div>
        </div>
        <div className="about-us-core-values">
          <div className="service-page-heading" style={{ paddingLeft: "3rem" }}>
            Our Core Values
          </div>
          <div className="values-block-container">
            <div className="values-blocks">
              {OurCoreValues.map((key) => {
                return (
                  <div className="values-block" key={key.id}>
                    <div className="rsn-block-icon">{key.icon}</div>
                    <div className="rsn-block-heading">{key.heading}</div>
                    <div className="rsn-block-text">{key.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="about-us-vm">
          <div className="our-mission">
            <div className="inner-trans"></div>
            <div className="vm-content">
              <div className="about-heading-vm">Our Vision</div>
              <div className="vm-text">
                Empowering global clients through technology that amplifies the
                human spirit.
              </div>
            </div>
          </div>
          <div className="our-vision">
            <div className="inner-trans"></div>
            <div className="vm-content">
              <div className="about-heading-vm">Our Vision</div>
              <div className="vm-text">
                At ISRI Technologies, we are dedicated to empowering businesses
                to reach their full potential with transformational digital
                solutions. Our commitment to being a trusted partner and
                delivering a peace-of-mind customer experience drives our
                relentless pursuit of excellence. Our team fosters
                accountability and creativity to drive customer success,
                facilitated by a supportive workplace culture.
              </div>
            </div>
          </div>
        </div>
        <div className="org-timeline-main">
          <div className="org-timeline-inner">
            <section class="timeline">
              <div class="info">
                <img
                  width="50"
                  height="50"
                  src="https://assets.codepen.io/210284/face.svg"
                  alt=""
                />
                <h2>Company History</h2>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium
                </p>
                <p>
                  <a href="">Learn more &gt;</a>
                </p>
              </div>

              <ol>
                <li>
                  <div>
                    <time>2012</time> Started with development of custom
                    application on Sharepoint 2010
                  </div>
                </li>
                <li>
                  <div>
                    <time>2014</time> Various multiple application built for
                    different domains
                  </div>
                </li>
                <li>
                  <div>
                    <time>2016</time> Expanded in terms of Team and Platforms
                  </div>
                </li>
                <li>
                  <div>
                    <time>2018</time> Introduced various products
                  </div>
                </li>
                <li>
                  <div>
                    <time>2020</time> Sustainable Solutions in lesser delivery
                    timelines
                  </div>
                </li>
                <li>
                  <div>
                    <time>2021</time> Expanded
                  </div>
                </li>
                <li>
                  <div>
                    <time>2022</time> We enter into Artificial Intelligence
                  </div>
                </li>
                <li>
                  <div>
                    <time>2024</time> Continuing to Provide highly efficient
                    solutions
                  </div>
                </li>

                <li></li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
