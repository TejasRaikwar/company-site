import React from "react";
import "./contactus.css";

const MailUS = ({ emailAddress, subject, body }) => {
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a href={mailtoLink} >
      <button className="con-btn">
        Email: {emailAddress}
      </button>
    </a>
  );
};

export default MailUS;
