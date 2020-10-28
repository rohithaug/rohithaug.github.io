import React, { Component } from "react";
import "../../styling/about.css";

class TextContent extends Component {
  render() {
    return (
      <div>
        <div className="text-content">
          Hello! I'm Rohith, based in Tamil Nadu, India. I'm an Engineering
          aspirant interested in the field of Software and Robotics and highly
          passionate about math, analytics and management. A Philanthropist,
          which I do feel the most important aspect of my life.
        </div>
        <br />
        <div className="text-content">
          I recently completed my Bachelors Degree in Robotics and Automation
          from{" "}
          <a
            href="https://www.psgtech.edu/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="PSGCollege">PSG College of Technology</span>
          </a>{" "}
          and am willing to work in a learning environment with full integrity
          and zest to enhance my skills and meet the company goals and
          objectives.
        </div>
      </div>
    );
  }
}

export default TextContent;
