import { GoGoal } from "react-icons/go";
import { FaBrain } from "react-icons/fa";
import { TbAdjustmentsQuestion } from "react-icons/tb";
const iconSize = 55;
const iconColor = "#800000"

export const OurCoreValues = [
    {
        id: 1,
        icon: <GoGoal size={iconSize} color={iconColor}/>,
        heading:"Goal Oriented",
        description:"The goal-oriented approach of ISRI Technologies always leads to successful project completion & client satisfaction."
    },
    {
        id: 2,
        icon: <FaBrain  size={iconSize} color={iconColor}/>,
        heading:"Thinking Beyond the Box",
        description:"ISRI Technologies is globally known for thinking out of the box that definitely helps you to stand out from the competition."
    },
    {
        id: 3,
        icon: <TbAdjustmentsQuestion  size={iconSize} color={iconColor}/>,
        heading:"Logical & Meticulous",
        description:"Our Logical & Meticulous professionals have transformed various small organizations into big brands."
    },
    {
        id: 4,
        icon: <TbAdjustmentsQuestion   size={iconSize} color={iconColor}/>,
        heading:"Decisive",
        description:"Quick & right decision is one of the main factor of anyone’s success. We are known as great problem solvers."
    }
]