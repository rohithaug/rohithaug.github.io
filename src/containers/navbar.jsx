// IMPORT LIBRARIES
import React from "react";
import { NavLink } from "react-router-dom";

// IMPORT STYLES
import "../styles/navbar.css";

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            ROHITH S P
            <i className="fa fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About me
              </NavLink>
            </li>

            <li className="nav-item">
              <a
                href="/Rohith_Resume.pdf"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Resume
              </a>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default Navbar;