// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/contact.css";

// IMPORT ICONS
import LinkedinIcon from "../assets/icons/linkedin";
import GithubIcon from "../assets/icons/github";
// import InstagramIcon from "../assets/icons/instagram";

const Contact = () => {
  return (
    <div className="contact-container">

      <div className="contact-intro">
        <p className="contact-details">Feel free to get in touch. Drop me a line:</p>
        <div className="contact-emails">
          <a
              href="mailto:rsp223@ucsd.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-email"
          >
            rsp223@ucsd.edu
          </a>
          <a
              href="mailto:rohithaug@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-email"
          >
            rohithaug@gmail.com
          </a>
        </div>
      </div>

      <div className="contact-icons-wrapper">
        <ul>
          <li>
            <a 
              href="https://www.linkedin.com/in/rohithsp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="contact-icons linkedin"/>
            </a>
          </li>

          <li>
            <a 
              href="https://github.com/rohithaug" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GithubIcon className="contact-icons github"/>
            </a>
          </li>

          {/* <li>
            <a 
              href="https://www.instagram.com/_rohith_s_p" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <InstagramIcon className="contact-icons instagram"/>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
