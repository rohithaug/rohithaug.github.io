import React, { Component } from "react";
import "../styling/projects.css";

import NavTabItems from "../components/projects/navTabItems";
import NavTabCards from "../components/projects/navTabCards";

class Projects extends Component {
  getHashPositionAndCurrentTab() {
    const tabs = ["#react", "#python", "#analysis", "#tableau"];
    const currentLink = window.location.href;
    var hashPosition = currentLink.lastIndexOf("#");
    var currentTab = currentLink.substring(hashPosition);
    if (!tabs.includes(currentTab)) {
      hashPosition = -1;
      currentTab = "";
    }
    return [hashPosition, currentTab];
  }

  render() {
    const res = this.getHashPositionAndCurrentTab();
    const hashPosition = res[0];
    const currentTab = res[1];
    return (
      <div>
        <div className="content">
          <div className="container h-100">
            <br /> <br /> <br />
            <NavTabItems hashPosition={hashPosition} currentTab={currentTab} />
            <br />
            <NavTabCards hashPosition={hashPosition} currentTab={currentTab} />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
