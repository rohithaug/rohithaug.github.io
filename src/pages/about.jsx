// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/about.css";

// IMPORT ICONS
// import PartyPopperIcon from "../assets/icons/partyPopper";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-intro">
        <p className="about-details">
          As a computer science and engineering professional, I am deeply passionate about the 
          intersection of software development, artificial intelligence, and machine learning. 
          My interest in these fields stems from my background in math, analytics, and management, 
          which led me to pursue an undergraduate degree in Robotics and Automation. 
          Through this program, I developed a keen interest in building software and machine learning 
          for various applications, from robots and industrial software to autonomous cars. 
          I quickly realized the vast potential of software and machine learning in various industries, 
          and knew that I wanted to pursue a career in this field.
        </p>
        <p className="about-details">
          Currently, I am pursuing my Masters in Computer Science from the University of California, 
          San Diego, with a focus in artificial intelligence and software engineering. This summer I 
          interned at Dolby Laboratories with the Cloud Media Solutions Research team to drive innovation 
          in cloud-based media technologies.
        
          I am confident that my general problem-solving skills, math background, and fundamental 
          knowledge of computer science will allow me to adapt and excel in any project that aligns 
          with my interests and background. With my skills and passion, I am excited to make a positive 
          impact in the software industry. I am actively seeking full time opportunities starting April 2024.

          {/* After completing my undergraduate studies, I spent two years working as an Analyst Programmer 
          in the New Initiatives team at Ramco Systems. This role gave me the opportunity to work closely 
          with the leadership team and develop interesting, fast-paced products that had a direct impact 
          on customers and internal teams.
          I specialize in full stack product development and machine learning. My technical skills are 
          complemented by my ability to think creatively, analyze problems, and communicate effectively.          
          Currently, I am pursuing a Master of Science in Computer Science from the University of California, 
          San Diego, with a focus in software engineering and artificial intelligence. I am confident that my 
          general problem-solving skills, math background, and fundamental knowledge of computer science will 
          allow me to adapt and excel in any project that aligns with my interests and background. 
          With my skills and passion, I am excited to make a positive impact in any organization and 
          work towards achieving their goals and corporate mission. 
          I am actively seeking full time opportunities starting January/April 2024. */}
          
          {/* One of my most notable achievements in this role was building 
          a full stack system from scratch, with guidance from stakeholders, which was eventually released 
          and is currently being used by over 60 customers.
        </p>
        <p className="about-details"> */}
        </p>
        {/* <p className="about-details">
          <PartyPopperIcon /> {" "}
          Thrilled to share that I'm working at Dolby Laboratories this summer as an intern, with the talented 
          Cloud Media Solutions Research team to drive innovation in cloud-based media technologies.
        </p> */}
        <p className="about-details">
          Looking to the future, my ultimate goal is to make a significant impact in the industry by 
          creating products that solve complex problems and contribute to the ongoing digital transformation 
          of our society.
        </p>

        <hr />

        <p className="about-quote">
          "And when the account of the ages is etched into the cosmos, let those who exist long after us know that this was our 
          finest hour!" - Optimus Prime
        </p>
      </div>
    </div>
  );
}

export default About;
