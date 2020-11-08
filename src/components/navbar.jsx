import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styling/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-inverse fixed-top navbar-dark">
        <Link to="/" className="navbar-brand">
          ROHITH
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Resume
              </Link>
            </li>
            {/*
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Contact
              </Link>
            </li>
            */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
