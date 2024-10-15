import React from "react";
import "./AboutUs.css";
import { useParams } from "react-router-dom";
import routesConfig from "../../Routes/routes";
const AboutUs = () => {
  // const { id } = useParams();
  // const path = `about-us`;
  const { bannerImage, portFolioImg } = routesConfig.AboutUs.content;
  console.log(bannerImage);
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, reiciendis.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
