// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../../styles/resume.css";

// IMPORT ICONS
import LinkedinIcon from "../../assets/icons/linkedin";
import GithubIcon from "../../assets/icons/github";
import EmailIcon from "../../assets/icons/email";
import GoogleScholarIcon from "../../assets/icons/googleScholar";
// import InstagramIcon from "../../assets/icons/instagram";

const HomeIcons = () => {
  return (
        <ul>
            <li>
                <a 
                href="https://www.linkedin.com/in/rohithsp" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <LinkedinIcon className="home-icons linkedin"/>
                </a>
            </li>

            <li>
                <a 
                href="https://github.com/rohithaug" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <GithubIcon className="home-icons github"/>
                </a>
            </li>

            {/* <li>
                <a 
                href="mailto:rohithcbi9343@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <EmailIcon className="home-icons email"/>
                </a>
            </li> */}
        </ul>
    );
}

export default HomeIcons;