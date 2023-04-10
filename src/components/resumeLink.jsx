// IMPORT LIBRARIES
import React from "react";

const ResumeLink = ({ name, url }) => {
  return (
    <a
      href={url}
      target="_blank" 
      rel="noopener noreferrer"
      className="resume-links"
    >
     {name}
    </a>
  );
}

export default ResumeLink;