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

// IMPORT CONTAINERS
import ResumeIcons from "../containers/resume/icons";

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
        <ResumeIcons />
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
                <p><b>Courses:</b></p>
                <p><b>&ensp;• Winter 2023 Quarter [January 2023 to Present]</b></p>
                <p>&emsp; 1. CSE 202 - Algorithm Design and Analysis by Professor {" "} 
                  <a
                      href="https://cseweb.ucsd.edu/~russell/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="resume-links"
                    >
                    Russell Impagliazzo
                  </a>
                </p>
                <p>&emsp; 2. CSE 224 - Graduate Networked Systems by Professor {" "} 
                  <a
                      href="https://cseweb.ucsd.edu/~gmporter/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="resume-links"
                    >
                    George Porter
                  </a>
                </p>
                <p>&emsp; 3. CSE 257 - Search and Optimization by Professor {" "} 
                  <a
                      href="https://scungao.github.io/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="resume-links"
                    >
                    Sicun Gao
                  </a>
                </p>

                <p><b>&ensp;• Fall 2022 Quarter [September 2022 to December 2022]</b></p>
                <p>&emsp; 1. CSE 250A - Probabilistic Reasoning and Learning by Professor {" "} 
                  <a
                      href="https://cseweb.ucsd.edu/~tberg/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="resume-links"
                    >
                    Taylor Berg-Kirkpatrick
                  </a>
                </p>
                <p>&emsp; 2. CSE 258R - Recommender System and Web Mining by Professor {" "} 
                  <a
                      href="https://cseweb.ucsd.edu/~jmcauley/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="resume-links"
                    >
                    Julian McAuley
                  </a>
                </p>
                <p>&emsp; 3. MED 277 - Introduction to Biomedical Natural Language Processing by Professors {" "} 
                  <a
                      href="https://www.hogarth.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="resume-links"
                    >
                    Michael Hogarth
                  </a> &{" "} 
                  <a
                      href="https://www.nematilab.info/people/shamim/index.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="resume-links"
                    >
                    Shamim Nemati
                  </a>
                </p>
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
                <p>• Led the development of a customer support system for ticket creation, incorporating information transfer from the core product to JIRA to streamline fix generation for support teams. The system featured a client-facing application built with React and a Node.JS backend, which communicated with the Ramco Software, Identity Server, and a centralized Node.JS server connected to JIRA, a documentation tool (XWiki), and MongoDB.</p>
                <p>• The system significantly reduced overall Service-Level Agreement by 30%, improved customer self-service, and is currently in use by over 60 customers.</p>
                <p>• Automated the deployment pipeline for the system, enabling efficient scaling of feature releases for over 40 public cloud customers.</p>
                <p>• Integrated UI and server logs from the system into Elastic and designed dashboards in Kibana to monitor performance and usage metrics.</p>
                <p>• Implemented a classification model for predicting Ticket Type and Subtype using Supervised Machine Learning, which was later refined using the BERT Transformer Model, resulting in an accuracy rate of 86%.</p>
                <p>• Developed a module that dynamically suggests help content based on the Product Business Component, Screen Context, and User Issue Summary from the company's documentation site using Solr Search.</p>
                <p>• Built 25+ and reviewed 40+ UI components for the Ramco Low Code Platform.</p>
                <p>• Designed and developed a scheduler to sync time bookings of over 300 employees from JIRA and Wrike to the internal timesheet application, allowing for accurate tracking of effort spent on various projects and support activities.</p>
                {/* <p>• Spearheaded the development of customer support system for ticket creation to ease fix generation for support teams. Client application (React and Node.JS) communicates with the Ramco Software, Identity Server and a centralized server connected to JIRA, Documentation Tool (XWiki) and MongoDB. The system helped reduce the overall Service-Level Agreement by 30%, improved customer self-service and is currently in live for 60+ customers.</p>
                <p>• Automated the deployment pipeline for the system to scale feature release for 40+ public cloud customers.</p>
                <p>• Integrated UI and server logs to elastic and designed dashboards in Kibana to monitor performance & usage metrics.</p>
                <p>• Implemented a classification model for Ticket Type and Sub-type prediction using Supervised Machine Learning and later improvised using BERT Transformer Model and achieved an accuracy of 86%.</p>
                <p>• Developed a module to dynamically suggest help content based on the Product Business Component, Screen Context, and User Issue Summary from the company documentation site using Solr Search.</p>
                <p>• Built 25+ and reviewed 40+ UI components for the Ramco Low Code Platform.</p>
                <p>• Designed and developed a scheduler to sync time bookings of 300+ employees from JIRA and Wrike to the internal timesheet application to facilitate tracking the effort spent in hours on various projects and support activities.</p> */}
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
