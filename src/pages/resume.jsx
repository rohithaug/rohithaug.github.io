// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/resume.css";

// IMPORT IMAGES
import studyingLogo from'../assets/images/studying.png';
import workingLogo from'../assets/images/working.png';
import ucsdLogo from'../assets/images/ucsd-logo.png';
import psgLogo from'../assets/images/psg-logo.png';
import ramcoLogo from'../assets/images/ramco-logo.png';

// IMPORT ICONS
import LinkedinIcon from "../assets/icons/linkedin";
import GithubIcon from "../assets/icons/github";

const Resume = () => {
  // useEffect(() => {
  //   window.on('scroll', function(){
  //     function isScrollIntoView(elem, index) {
  //       var docViewTop = window.scrollTop();
  //       var docViewBottom = docViewTop + window.height();
  //       var elemTop = elem.offset().top;
  //       var elemBottom = elemTop + window.height()*.5;
  //       if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
  //         elem.addClass('active');
  //       }
  //       if(!(elemBottom <= docViewBottom)) {
  //         elem.removeClass('active');
  //       }
  //       var MainTimelineContainer = '#vertical-scrollable-timeline'[0];
  //       var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - window.height()*.5;
  //       MainTimelineContainer.find('.inner').css('height',MainTimelineContainerBottom+'px');
  //     }
  //     var timeline = '#vertical-scrollable-timeline li';
  //     Array.from(timeline).forEach(isScrollIntoView);
  //   });
  // });

  return (
    <div className="resume-container">
      <div className="download-section">
        <a                 
          href="/Rohith_Resume.pdf"
          className="resume-download"
        >
          Download Resume
        </a>
      </div> 

      <div className="icons-section">
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
        </ul>
      </div>

      <div className="timeline-section resume-education">
        <div className="heading-section">
          <img 
            src={studyingLogo} 
            className="logo studying"
            alt=""
          ></img>
          <div className="heading">EDUCATION</div>
        </div>

        <div className="timeline-container">
          <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
            <div className="list-progress">
              <div className="inner">
              </div>
            </div>

            <li className="resume-item active">
              <div className="title">
                <a
                  href="https://ucsd.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  UNIVERSITY OF CALIFORNIA - SAN DIEGO
                </a>
              </div>

              <div className="sub-title">M.S. IN{" "}
                <a
                  href="https://cse.ucsd.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  COMPUTER SCIENCE
                </a>
              </div>

              <div className="sub-sub-title">September 2022 - Current</div>

              <img 
                src={ucsdLogo} 
                className="resume-logo ucsd-logo"
                alt=""
              ></img>

              <div className="content">
                <p><b>CGPA</b>: 4.0/4.0</p>
              </div>
              
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://www.psgtech.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  PSG COLLEGE OF TECHNOLOGY
                </a>
              </div>

              <div className="sub-title">B.E. IN{" "}
                <a
                  href="https://www.psgtech.edu/hme.php?var=RAE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  ROBOTICS & AUTOMATION
                </a>
              </div>

              <div className="sub-sub-title">July 2016 - September 2020</div>

              <img 
                src={psgLogo} 
                className="resume-logo psg-logo"
                alt=""
              ></img>
              <div className="content">
                <p><b>CGPA</b>: 9.91/10.0</p>
                <p>• Best Outgoing Student and Gold Medallist - Batch of 2020</p>
                <p>• Student Researcher at the R&D Center (Advisors:{" "}
                    <a
                      href="https://www.psgtech.edu/profileurl.php?id=C513" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="resume-links"
                    >
                      Dr. B. Vinod
                    </a>
                     {" "}and{" "}
                     <a
                      href="https://www.psgtech.edu/facgen.php?id=C6062" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="resume-links"
                    >
                      Dr. M. Suresh
                    </a>
                  )
                </p>
              </div>
              <div className="pointer"></div>
            </li>
          </ul>
        </div>
      </div>

      <div className="timeline-section resume-experience">
        <div className="heading-section">
          <img 
            src={workingLogo} 
            className="logo studying"
            alt=""
          ></img>
          <div className="heading">EXPERIENCE</div>
        </div>

        <div className="timeline-container">
          <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
            <div className="list-progress">
              <div className="inner">
              </div>
            </div>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://www.ramco.com/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  RAMCO SYSTEMS
                </a>
              </div>

              <div className="sub-title">
                Analyst Programmer - New Initiatives · Full Time
              </div>

              <div className="sub-sub-title">November 2020 - June 2022</div>
              <div className="sub-sub-title">Chennai, Tamil Nadu, India</div>

              <img 
                src={ramcoLogo} 
                className="resume-logo ramco-logo"
                alt=""
              ></img>
              <div className="content">
                <p><b>Skills</b>: Full Stack Development · Data Science · API Integration · Distributed Systems · Deployment Automation</p>
                <p>• Spearheaded the development of customer support system for ticket creation to ease fix generation for support teams. Client application (React and Node.JS) communicates with the Ramco Software, Identity Server and a centralized server connected to JIRA, Documentation Tool (XWiki) and MongoDB. The system helped reduce the overall Service-Level Agreement by 30%, improved customer self-service and is currently in live for 60+ customers.</p>
                <p>• Automated the deployment pipeline for the system to scale feature release for 40+ public cloud customers.</p>
                <p>• Integrated UI and server logs to elastic and designed dashboards in Kibana to monitor performance & usage metrics.</p>
                <p>• Implemented a classification model for Ticket Type and Sub-type prediction using Supervised Machine Learning and later improvised using BERT Transformer Model and achieved an accuracy of 86%.</p>
                <p>• Developed a module to dynamically suggest help content based on the Product Business Component, Screen Context, and User Issue Summary from the company documentation site using Solr Search.</p>
                <p>• Built 25+ and reviewed 40+ UI components for the Ramco Low Code Platform.</p>
                <p>• Designed and developed a scheduler to sync time bookings of 300+ employees from JIRA and Wrike to the internal timesheet application to facilitate tracking the effort spent in hours on various projects and support activities.</p>
              </div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://www.psgtech.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  PSG COLLEGE OF TECHNOLOGY
                </a>
              </div>

              <div className="sub-title">
                Undergraduate Student Researcher · Internship
              </div>

              <div className="sub-sub-title">December 2019 - August 2020</div>
              <div className="sub-sub-title">Coimbatore, Tamil Nadu, India</div>

              <img 
                src={psgLogo} 
                className="resume-logo psg-logo"
                alt=""
              ></img>
              <div className="content">
                <p>• Researched on topics related to Object Detection and Pose Estimation, Trajectory Generation Scheme Model and Algorithm, and Training Game Model for Human-Robot Interaction.</p>
                <p><b>Advisor</b>:{" "}
                  <a
                    href="https://www.psgtech.edu/profileurl.php?id=C513" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="resume-links"
                  >
                    Dr. B. Vinod, Head of the Department, Robotics and Automation Engineering                  
                  </a>
                  .
                </p>
              </div>
              <div className="pointer"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
