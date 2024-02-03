// IMPORT LIBRARIES
import React from "react";
import { NavLink } from "react-router-dom";

// IMPORT STYLES
import "../styles/navbar.css";

// IMPORT ICONS
import MenuIcon from "../assets/icons/menu";
import CancelIcon from "../assets/icons/cancel";

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
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
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
              <NavLink
                exact
                to="/resume"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Resume
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li> */}
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            {click
              ? <CancelIcon /> 
              : <MenuIcon />
            }
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default Navbar;