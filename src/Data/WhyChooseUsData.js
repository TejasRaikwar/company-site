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
        heading:"Unparalleled SharePoint Expertise",
        description:"Our team of certified SharePoint experts has a proven track record of delivering tailored solutions that drive business results."
    },
    {
        id: 2,
        icon: <Ri24HoursFill  size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"Innovative Approach",
        description:"We combine cutting-edge technology with creative problem-solving to deliver innovative SharePoint solutions that exceed expectations."
    },
    {
        id: 3,
        icon: <TbCertificate  size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"Personalized Support",
        description:"Our dedicated support team provides personalized assistance to ensure seamless integration and optimal performance."
    },
    {
        id: 4,
        icon: <FaRegHandshake   size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"Agile Methodology",
        description:"Our iterative development process ensures rapid delivery, flexibility, and continuous improvement."
    },
    {
        id: 5,
        icon: <GoLaw  size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"Cost-Effective Solutions",
        description:"We optimize SharePoint investments by streamlining processes, reducing costs, and enhancing productivity."
    },
    {
        id: 6,
        icon: <GiPlayerTime  size={iconSize} color={iconColor} className="rotate-icon"/>,
        heading:"Proven Track Record",
        description:"Our success stories speak for themselves - we&#39;ve delivered scalable, secure, and user-friendly SharePoint solutions for diverse industries."
    },
]