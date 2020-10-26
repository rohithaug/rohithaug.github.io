import React, { Component } from "react";
import "../styling/contact.css";
import ContactForm from "./contactForm";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <div className="container h-100">
            <br /> <br /> <br />
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
