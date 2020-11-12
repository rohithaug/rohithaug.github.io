import React, { Component } from "react";
import "../../styling/about.css";

class TextContent extends Component {
  render() {
    return (
      <div>
        <div className="text-content">
          Hello! I'm Rohith, based in Tamil Nadu, India. I'm an Engineering
          aspirant interested in the field of Software and Automation and highly
          passionate about Math, Robotics, Analytics and Management. A
          Philanthropist, which I do feel the most important aspect of my life.
        </div>
        <br />
        <div className="text-content">
          I am currently working as an Analyst Programmer at{" "}
          <a
            href="https://www.ramco.com/"
            rel="noopener noreferrer"
            target="_blank"
            style={{ color: "#1d1d1d" }}
          >
            <span className="aboutTextLinks">Ramco Systems</span>
          </a>
          , Chennai. I completed my Bachelors Degree in Robotics and Automation
          from{" "}
          <a
            href="https://www.psgtech.edu/"
            rel="noopener noreferrer"
            target="_blank"
            style={{ color: "#1d1d1d" }}
          >
            <span className="aboutTextLinks">PSG College of Technology</span>
          </a>
          , Coimbatore.
        </div>
      </div>
    );
  }
}

export default TextContent;
