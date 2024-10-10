import React, { useEffect, useState } from "react";
import "./Footer.css";
import Logo from "../../assets/ISRI-LOGO.jpg";
import useWindowDimensions from "../Hooks/WindowDimensions/useWindowDimensions";
import CallUS from "../ContactUS/CallUS";
import MailUS from "../ContactUS/MailUS";
const Footer = () => {
  const { width } = useWindowDimensions();
  const [isSmall, setIsSmall] = useState(false);
  const phoneNumber = 1234567890;

  useEffect(() => {
    if (width <= 550) setIsSmall(true);
    else setIsSmall(false);
  }, [width]);

  const dynamicDisplay = isSmall
    ? {
        display: "block",
      }
    : {
        display: "none",
      };

  return (
    <div className="footer-main-container">
      <div className="footer-logo-div">
        <img src={Logo} alt="ISRI Logo" className="f-isri-logo" height={50} />
      </div>
      <div className="footer-inner-container">
        <div className="footer-left-container">
          <div className="get-in-touch">
            <div className="heading-g">Get In Touch</div>
            <div className="get-in-touch-txt">
              Need more information or have a specific inquiry? We're here to
              assist you. Feel free to get in touch by phone, email, or our
              online contact form. We’re committed to providing you with prompt
              and helpful support
            </div>
            <div className="contact-us">
              <div className="con-phone">
                <CallUS phoneNumber="+91 9082582243" />
              </div>
              <div className="con-email">
                <MailUS
                  emailAddress="test@email.com"
                  subject="Hello"
                  body="I wanted to reach out regarding..."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-right-container">
        </div>
      </div>
      <div className="bottomSpaceManagerDiv" style={dynamicDisplay}></div>
    </div>
  );
};

export default Footer;
