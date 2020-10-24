import React, { Component } from "react";
import "../styling/home.css";
import Typing from "react-typing-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

class Home extends Component {
  render() {
    return (
      <div className="content">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col offset-md-2">
              <Typing speed={75} cursorClassName="cursor">
                <div className="text">
                  <span>Hi there!</span>
                  <Typing.Delay ms={500} /> <br />
                  <span>I'm Rohith </span>
                  <Typing.Delay ms={500} /> <br />
                  <span>Software Developer.</span>
                  <Typing.Delay ms={99999999} />
                </div>
              </Typing>
              <br />
              <a
                href="https://www.linkedin.com/in/rohithsp/"
                rel="noopener noreferrer"
                target="_blank"
                className="linkedin social"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://github.com/rohithaug"
                rel="noopener noreferrer"
                target="_blank"
                className="github social"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCi85kyL4Q-QpKgTp3sJdnFg"
                rel="noopener noreferrer"
                target="_blank"
                className="youtube social"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a
                href="https://twitter.com/rohithaug"
                rel="noopener noreferrer"
                target="_blank"
                className="twitter social"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

/*
      <div className="content">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col offset-md-2">
              <Typing cursorClassName="cursor">
                <div className="hello">
                  Hi there!
                  <Typing.Delay ms={1000} /> <br />
                  I'm Rohith,
                  <Typing.Delay ms={1000} /> <br />
                  Software Developer.
                  <Typing.Delay ms={10000} />
                </div>
              </Typing>
            </div>
          </div>
        </div>
      </div>

*/
