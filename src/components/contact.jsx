import React, { Component } from "react";
import "../styling/contact.css";
import Typing from "react-typing-animation";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocationOnIcon from "@material-ui/icons/LocationOn";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="container h-100">
            <br /> <br /> <br />
            <div className="row">
              <div className="col">
                <Typing speed={50} cursorClassName="cursor">
                  <div className="text">
                    <span>Contact Me ...</span>
                    <Typing.Delay ms={99999999} />
                  </div>
                </Typing>
              </div>
            </div>
            {/*<ContactForm />*/}
            <br />
            <div className="row">
              <div className="col">
                <a href="mailto:rohithcbi9343@gmail.com">
                  <EmailIcon className="icons" />
                  <span className="contactText">rohithcbi9343@gmail.com</span>
                </a>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <a
                  href="https://www.linkedin.com/in/rohithsp/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <LinkedInIcon className="icons" />
                  <span className="contactText">
                    www.linkedin.com/in/rohithsp/
                  </span>
                </a>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <a
                  href="https://www.google.com/maps/place/Tiruchirappalli"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <LocationOnIcon className="icons" />
                  <span className="contactText">
                    Tiruchirappalli, Tamil Nadu, India
                  </span>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
