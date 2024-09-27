import { FaChartLine, FaRegHandshake  } from "react-icons/fa";
import { Ri24HoursFill } from "react-icons/ri";
import { GoLaw } from "react-icons/go";
import { TbCertificate } from "react-icons/tb";
import { GiPlayerTime } from "react-icons/gi";

const iconSize = 55;
// const iconColor = "rgb(7, 89, 127)"
const iconColor = "#800000"


export const WhyChooseUsData = [
    {
        id: 1,
        icon: <FaChartLine size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"Customized Business Solutions",
        description:"Tailored services to meet your unique business needs for seamless integration and growth."
    },
    {
        id: 2,
        icon: <Ri24HoursFill  size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"Expert Development Services",
        description:"Our experienced team delivers innovative, precision-driven solutions for your business."
    },
    {
        id: 3,
        icon: <TbCertificate  size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"Efficient Collaboration Tools",
        description:"Boost productivity with solutions designed to enhance teamwork and streamline processes."
    },
    {
        id: 4,
        icon: <FaRegHandshake   size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"Streamlined Document Management",
        description:"Manage documents efficiently with secure, accessible, and optimized workflows."
    },
    {
        id: 5,
        icon: <GoLaw  size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"Cutting-Edge Technology",
        description:"Empowering businesses with scalable, secure solutions to stay ahead in any industry."
    },
    {
        id: 6,
        icon: <GiPlayerTime  size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"Seamless System Integration",
        description:"Integrate systems effortlessly for enhanced efficiency and reduced operational costs."
    },
]