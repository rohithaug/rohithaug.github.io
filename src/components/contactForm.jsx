import React, { Component } from "react";
import "../styling/contact.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      displayed: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ disabled: true, emailSent: true });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <input
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  value={this.state.subject}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ textAlign: "right" }}>
              <button
                type="submit"
                className="btn btn-outline-info"
                disabled={this.state.disabled}
              >
                Send
              </button>
            </div>
          </div>

          {this.state.emailSent === true && (
            <div className="row">
              <div
                className="col-md-6 offset-md-3"
                style={{ fontSize: "large", textAlign: "center" }}
              >
                <p className="alert alert-success" role="alert">
                  Email Sent!
                </p>
              </div>
            </div>
          )}
          {this.state.emailSent === false && (
            <div className="row">
              <div
                className="col-md-6 offset-md-3"
                style={{ textAlign: "center" }}
              >
                <p className="alert alert-danger" role="alert">
                  Email Not Sent!
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default ContactForm;
