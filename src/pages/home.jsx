// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/home.css";

// IMPORT IMAGES
import rohithImage from'../assets/images/rohith.jpeg';

// IMPORT CONTAINERS
import HomeIcons from "../containers/home/icons";

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
        <HomeIcons />
      </div>
    </div>
  );
}

export default Home;
