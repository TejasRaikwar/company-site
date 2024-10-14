import www from "../images/www.png";
import appIcon from "../images/mobileAppIcon.png";
import ecomLogo from "../images/ecom-logo.png";
import digTransLogo from "../images/digital-transformation.png";
import AILogo from "../images/AI-logo.png";
// banner Images
import banner1 from "../images/Banners/ramon-salinero-vEE00Hx5d0Q-unsplash.jpg";
import banner2 from "../images/Banners/background.jpg";
import banner3 from "../images/Banners/fabio-oyXis2kALVg-unsplash.jpg";
import banner4 from "../images/Banners/hero-wallaper1.jpg";

const iconSize = 100;

export const heroSliderData = [
  {
    logo: <img src={www} height={iconSize} alt="" />,
    heading: (
      <div className="sd-text">
        Responsive Website <br />
        to Scale Responsible <br />
        Bussiness
      </div>
    ),
    background: banner1,
  },
  {
    logo: <img src={AILogo} height={iconSize} alt="" />,
    heading: (
      <div className="sd-text">
        Artificial Intelligence <br />
      </div>
    ),
    background: banner2,
  },
  {
    logo: <img src={digTransLogo} height={iconSize} alt="" />,
    heading: (
      <div className="sd-text">
        Digital Transformation <br />
        With a Human Touch
      </div>
    ),
    background: banner3,
  },
  {
    logo: <img src={appIcon} height={iconSize} alt="" />,
    heading: (
      <div className="sd-text">
        Enterprise <br />
        Mobile Solutions
      </div>
    ),
    text: "Think Big, Think Different with our Mobile Solutions",
    background: banner4,
  },
];
