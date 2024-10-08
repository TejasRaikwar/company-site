import React from "react";
import "./AboutUs.css";
import useWindowDimensions from "../../Hooks/WindowDimensions/useWindowDimensions";
import { Link } from "react-router-dom";

const AboutUs = ({ toggleNavbar }) => {
  const { width } = useWindowDimensions();
  if (width >= 830) {
    return (
      <div className="dropdown">
        <div className="dropdown-lvl-1 right-space">
          
          <div className="services-links">
            <br />
            {/* list items */}
            <ul className="services-links-items">
              <li>
                <Link
                  to="about-us/company"
                  style={{ alignItems: "center", display: "flex" }}
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="about-us/quality-assurance"
                  style={{ alignItems: "center", display: "flex" }}
                >
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link
                  to="about-us/careers"
                  style={{ alignItems: "center", display: "flex" }}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="about-us/development-approach"
                  style={{ alignItems: "center", display: "flex" }}
                >
                  Development Approach
                </Link>
              </li>
              <li>
                <Link
                  to="about-us/communication-strategy"
                  style={{ alignItems: "center", display: "flex" }}
                >
                  Communication Strategy
                </Link>
              </li>
              <li>
                <Link
                  to="about-us/social-responsibility"
                  style={{ alignItems: "center", display: "flex" }}
                >
                  Social Responsibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="services-dropdown">
        <ul className="services-dropdown-links-items">
          <li>
            <Link
              to="about-us/company"
              style={{ alignItems: "center", display: "flex" }}
              onClick={toggleNavbar}
            >
              Company
            </Link>
          </li>
          <li>
            <Link
              to="about-us/partners-and-awards"
              style={{ alignItems: "center", display: "flex" }}
              onClick={toggleNavbar}
            >
              Partners & Awards
            </Link>
          </li>
          <li>
            <Link
              to="about-us/client-testimonials"
              style={{ alignItems: "center", display: "flex" }}
              onClick={toggleNavbar}
            >
              Clients Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="about-us/quality-assurance"
              style={{ alignItems: "center", display: "flex" }}
              onClick={toggleNavbar}
            >
              Quality Assurance
            </Link>
          </li>
          <li>
            <Link
              to="about-us/careers"
              style={{ alignItems: "center", display: "flex" }}
              onClick={toggleNavbar}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="about-us/development-approach"
              style={{ alignItems: "center", display: "flex" }}
              onClick={toggleNavbar}
            >
              Development Approach
            </Link>
          </li>
          <li>
            <Link
              to="about-us/communication-strategy"
              style={{ alignItems: "center", display: "flex" }}
              onClick={toggleNavbar}
            >
              Communication Strategy
            </Link>
          </li>
          <li>
            <Link
              to="about-us/social-responsibility"
              style={{ alignItems: "center", display: "flex" }}
              onClick={toggleNavbar}
            >
              Social Responsibility
            </Link>
          </li>
        </ul>
      </div>
    );
  }
};

export default AboutUs;
