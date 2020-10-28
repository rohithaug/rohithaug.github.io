import React, { Component } from "react";
import "../styling/about.css";
import Typing from "react-typing-animation";

class About extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="container h-100">
            <br /> <br /> <br />
            <div className="row">
              <div className="col">
                <Typing speed={100} cursorClassName="cursor">
                  <div className="text">
                    <span>About Me !</span>
                    <Typing.Delay ms={99999999} />
                  </div>
                </Typing>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="text-content">
                  Hello! I'm Rohith, based in Tamil Nadu, India. I'm an
                  Engineering aspirant interested in the field of Software and
                  Robotics and highly passionate about math, analytics and
                  management. A Philanthropist, which I do feel the most
                  important aspect of my life.
                </div>
                <br />
                <div className="text-content">
                  I recently completed my Bachelors Degree in Robotics and
                  Automation from{" "}
                  <a
                    href="https://www.psgtech.edu/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="PSGCollege">
                      PSG College of Technology
                    </span>
                  </a>{" "}
                  and am willing to work in a learning environment with full
                  integrity and zest to enhance my skills and meet the company
                  goals and objectives.
                </div>
                <br />
                <div className="text-content">
                  A few technologies I've been working with recenly:
                </div>
                <br />
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="text-content">
                        <Typing speed={150} cursorClassName="cursor">
                          <ul>
                            <li>Python</li>
                            <Typing.Delay ms={750} />
                            <li>Tableau</li>
                            <li>SQL</li>
                            <Typing.Delay ms={150} />
                          </ul>
                        </Typing>
                      </div>
                    </div>
                    <div className="col">
                      <div className="text-content">
                        <Typing speed={150} cursorClassName="cursor">
                          <ul>
                            <li>JavaScript</li>
                            <li>React</li>
                            <Typing.Delay ms={450} />
                            <li>Java</li>
                          </ul>
                        </Typing>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col d-flex justify-content-center">
                <img
                  src={require("../media/rohith.jpg")}
                  alt="Rohith Profile Pic"
                  className="rohithPic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
