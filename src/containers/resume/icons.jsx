// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../../styles/resume.css";

// IMPORT ICONS
import LinkedinIcon from "../../assets/icons/linkedin";
import GithubIcon from "../../assets/icons/github";
import GoogleScholarIcon from "../../assets/icons/googleScholar";

const ResumeIcons = () => {
  return (
        <ul>
            <li>
                <a 
                    href="https://www.linkedin.com/in/rohithsp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <LinkedinIcon className="resume-icons linkedin"/>
                </a>
            </li>

            <li>
                <a 
                    href="https://github.com/rohithaug" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <GithubIcon className="resume-icons github"/>
                </a>
            </li>

            <li>
                <a 
                    href="https://scholar.google.com/citations?user=4KHK9tQAAAAJ&hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <GoogleScholarIcon className="resume-icons google-scholar"/>
                </a>
            </li>
        </ul>
    );
}

export default ResumeIcons;