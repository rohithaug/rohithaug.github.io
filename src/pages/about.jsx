import React, { Component } from "react";
import "../styling/about.css";
import Typing from "react-typing-animation";
import TextContent from "../components/about/textContent";
import Technologies from "../components/about/technologies";

class About extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="container h-100">
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
              <div className="col-md-6">
                <TextContent />
                <br />
                <Technologies />
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img
                  src={require("../media/rohith.jpg")}
                  alt="Profile Pic"
                  className="rohithPic"
                />
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
