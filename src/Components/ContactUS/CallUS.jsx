import React from "react";
import "./contactus.css";

const CallUS = ({phoneNumber}) => {
  return (
    <a href={`tel:${phoneNumber}`}>
      <button className="con-btn">
        Call: {phoneNumber}
      </button>
    </a>
  );
};

export default CallUS;
