import React, { Component } from "react";
import "../styling/about.css";
import Typing from "react-typing-animation";

class About extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col offset-md-2">
                <Typing speed={50} cursorClassName="cursor">
                  <div className="text">
                    <span>About - Yet to be updated.</span>
                    <Typing.Delay ms={99999999} />
                  </div>
                </Typing>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
