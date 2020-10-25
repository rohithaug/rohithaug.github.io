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
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/resume" className="nav-link">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

/*
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#top" data-toggle="collapse" data-target=".navbar-collapse.show">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#top" data-toggle="collapse" data-target=".navbar-collapse.show">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#top" data-toggle="collapse" data-target=".navbar-collapse.show">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<div id="top"></div>
*/
