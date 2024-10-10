import React from "react";
import { AiFillCloud, AiOutlineMobile } from "react-icons/ai";
import { SiMicrosoftsharepoint, SiPowerapps } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { BsLaptop, BsFillPeopleFill } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { Link } from "react-router-dom";
import { TbBrandOffice } from "react-icons/tb";

const Services = () => {
  return (
    <div className="dropdown">
      <div className="dropdown-lvl-1 right-space">
        
        <div className="services-links">
          <br />
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
                to="services/office365"
                style={{ alignItems: "center", display: "flex" }}
              >
                <TbBrandOffice
                  size={20}
                  style={{ marginRight: "10px" }}
                  color="red"
                />
                Office 365 Development
              </Link>
            </li>
            <li>
              <Link
                to="services/dotnet-development"
                style={{ alignItems: "center", display: "flex" }}
              >
                <DiDotnet
                  size={20}
                  style={{ marginRight: "10px" }}
                  color="blue"
                />
                ASP .Net Development
              </Link>
            </li>
            <li>
              <Link
                to="services/power-platform"
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
                to="services/artificial-intelligence"
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
