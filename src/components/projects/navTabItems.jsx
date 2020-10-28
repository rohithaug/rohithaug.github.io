import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styling/projects.css";

class navTabItems extends Component {
  render() {
    const { hashPosition, currentTab } = this.props;
    return (
      <ul
        className="nav nav-tabs justify-content-center"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item">
          <Link
            to={{
              hash: "#all",
            }}
            className={
              "nav-link" +
              (currentTab === "#all" || hashPosition === -1 ? " active" : "")
            }
            id="all-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="all"
            aria-selected={
              currentTab === "#all" || hashPosition === -1 ? "true" : "false"
            }
          >
            All
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={{
              hash: "#react",
            }}
            className={"nav-link" + (currentTab === "#react" ? " active" : "")}
            id="react-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="react"
            aria-selected={currentTab === "#react" ? "true" : "false"}
          >
            React
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={{
              hash: "#python",
            }}
            className={"nav-link" + (currentTab === "#python" ? " active" : "")}
            id="python-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="python"
            aria-selected={currentTab === "#python" ? "true" : "false"}
          >
            Python
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={{
              hash: "#analysis",
            }}
            className={
              "nav-link" + (currentTab === "#analysis" ? " active" : "")
            }
            id="analysis-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="analysis"
            aria-selected={currentTab === "#analysis" ? "true" : "false"}
          >
            Data Analysis
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={{
              hash: "#tableau",
            }}
            className={
              "nav-link" + (currentTab === "#tableau" ? " active" : "")
            }
            id="tableau-tab"
            data-toggle="tab"
            role="tab"
            aria-controls="tableau"
            aria-selected={currentTab === "#tableau" ? "true" : "false"}
          >
            Tableau
          </Link>
        </li>
      </ul>
    );
  }
}

export default navTabItems;
