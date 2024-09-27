import { AiOutlineCloud } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { BiBookContent } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";

// const clr = "#07597F"
const clr = "#800000"
const size = 60;

export const OurservicesData = [
  {
    id:1,
    icon: <CgWebsite size={size} color={clr}  />,
    title: "Sharepoint Development",
    text: "Microsoft SharePoint is a document management and collaboration platform that helps organizations oversee, control and work with archives, documents, reports and other content that is vital to their business processes.",
  },
  {
    id:2,
    icon: <GiArtificialIntelligence  size={size} color={clr}  />,
    title: ".Net",
    text: "NET is a versatile, open-source, cross-platform development platform created by Microsoft, enabling organizations to build and deploy a wide range of applications, from enterprise-level web services and cloud solutions to mobile apps and desktop software..",
  },
  {
    id:3,
    icon: <FaMobileAlt  size={size} color={clr}  />,
    title: "Power Platform",
    text: "Microsoft Power Platform is a user-friendly toolset that helps businesses build apps, automate tasks, and analyze data with little to no coding, boosting efficiency and innovation",
  },
  {
    id:4,
    icon: <MdOutlineSettingsApplications  size={size} color={clr} />,
    title: "Office 365",
    text: "Microsoft Office 365 is a cloud-based service providing access to Word, Excel, PowerPoint, Outlook, OneDrive storage, and Microsoft Teams for collaboration. It enables easy work, sharing, and communication from any device, anywhere.",
  },
  {
    id:5,
    icon: <FiShoppingCart  size={size} color={clr} />,
    title: "Artificial Intelligence",
    text: "Artificial Intelligence (AI) allows computers to perform tasks like learning, problem-solving, and decision-making. It powers chatbots, virtual assistants, and recommendation systems, enhancing efficiency and automation.",
  },
];
