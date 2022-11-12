// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/home.css";

// IMPORT IMAGES
import rohithImage from'../assets/images/rohith.jpg';

// IMPORT ICONS
import LinkedinIcon from "../assets/icons/linkedin";
import GithubIcon from "../assets/icons/github";
import InstagramIcon from "../assets/icons/instagram";
import EmailIcon from "../assets/icons/email";

const Home = () => {
  return (
    <div className="home-container">
      <img 
        src={rohithImage} 
        className="home-img"
        alt=""
      ></img>

      <div className="home-intro">
        <p className="home-name">Hi there! I am Rohith.</p>
        <p className="home-university">GRADUATE STUDENT @ UC SAN DIEGO</p>
        <p className="home-address">La Jolla, California</p>
      </div>

      <div className="home-icons-wrapper">
        <ul>
          <li>
            <a 
              href="https://www.linkedin.com/in/rohithsp" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <LinkedinIcon className="home-icons"/>
            </a>
          </li>

          <li>
            <a 
              href="https://github.com/rohithaug" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <GithubIcon className="home-icons"/>
            </a>
          </li>

          <li>
            <a 
              href="https://www.instagram.com/_rohith_s_p" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <InstagramIcon className="home-icons"/>
            </a>
          </li>

          <li>
            <a 
              href="mailto:rohithaug@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <EmailIcon className="home-icons"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
