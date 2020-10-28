import React, { Component } from "react";
import "../../styling/about.css";
import Typing from "react-typing-animation";

class Technologies extends Component {
  render() {
    return (
      <div>
        <div className="text-content">
          A few technologies I've been working with recenly:
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text-content">
                <Typing speed={150} cursorClassName="cursor-content">
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
                <Typing speed={150} cursorClassName="cursor-content">
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
    );
  }
}

export default Technologies;
