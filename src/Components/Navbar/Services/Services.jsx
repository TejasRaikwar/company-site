import React from "react";
import {
  AiFillSetting,
  AiFillCloud,
  AiOutlineMobile,
  AiOutlineDesktop,
} from "react-icons/ai";
import { SiMicrosoftsharepoint, SiPowerapps  } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { FaHandshake } from "react-icons/fa";
import { BsCart4, BsLaptop, BsFillPeopleFill } from "react-icons/bs";
import { IoEarthOutline } from "react-icons/io5";
import { GiArtificialIntelligence } from "react-icons/gi";

import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="dropdown">
      <div className="dropdown-lvl-1">
        <div className="services-image">{/* Image */}</div>
        <div className="services-links">
          <div style={{ padding: "10px" }}>
            <br />
            <span className="dropdown-heading">SERVICES</span>
            <br />
            <br />
            <hr />
          </div>
          {/* list items */}
          <ul className="services-links-items">
            <li>
              <Link
                to="services/sharepoint-development"
                style={{ alignItems: "center", display: "flex" }}
              >
                <SiMicrosoftsharepoint
                  size={20}
                  style={{ marginRight: "10px" }}
                  color="#046a70"
                />
                SharePoint Development
              </Link>
            </li>
            <li>
              <Link
                to="services/software-development"
                style={{ alignItems: "center", display: "flex" }}
              >
                <DiDotnet
                  size={20}
                  style={{ marginRight: "10px" }}
                  color="blue"
                />
                .Net
              </Link>
            </li>
            <li>
              <Link
                to="services/software-development"
                style={{ alignItems: "center", display: "flex" }}
              >
                <SiPowerapps
                  size={20}
                  style={{ marginRight: "10px" }}
                  color="#872c81"
                />
                Power Platform
              </Link>
            </li>
            <li>
              <Link
                to="services/mobile-apps-development"
                style={{ alignItems: "center", display: "flex" }}
              >
                <AiOutlineMobile size={20} style={{ marginRight: "10px" }} />
                Mobile Apps Development
              </Link>
            </li>
            <li>
              <Link
                to="services/cloud-solution"
                style={{ alignItems: "center", display: "flex" }}
              >
                <AiFillCloud
                  size={20}
                  style={{ marginRight: "10px" }}
                  color="skyblue"
                />
                Cloud Solution
              </Link>
            </li>
            <li>
              <Link
                to="services/cms-solutions"
                style={{ alignItems: "center", display: "flex" }}
              >
                <BsLaptop size={20} style={{ marginRight: "10px" }} />
                CMS Solutions
              </Link>
            </li>
            <li>
              <Link
                to="services/hire-developer"
                style={{ alignItems: "center", display: "flex" }}
              >
                <BsFillPeopleFill
                  size={20}
                  style={{ marginRight: "10px" }}
                  color="skyblue"
                />
                Hire Developer
              </Link>
            </li>
            <li>
              <Link
                to="services/ai-ml"
                style={{ alignItems: "center", display: "flex" }}
              >
                <GiArtificialIntelligence
                  size={20}
                  style={{ marginRight: "10px" }}
                />
                Artificial intelligence
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
