import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styling/projects.css";

//Import Projects
import PathfindingVisualizerCard from "../projects/react/pathfindingVisualizer";
import SortingVisualizerCard from "../projects/python/sortingVisualizer";
import SudokuSolverCard from "../projects/python/sudokuSolver";
import TextEditorCard from "../projects/python/textEditor";
import Covid19IndiaDataCard from "../projects/python/covid19IndiaData";
import BattleOfNeighborhoodsCard from "../projects/dataAnalysis/battleOfNeighborhoods";
import IrisFlowerClassificationCard from "../projects/dataAnalysis/irisFlowerClassification";
import Covid19IndiaVizCard from "../projects/tableau/covid19IndiaViz";
import MoMWeek23Card from "../projects/tableau/momWeek23";
import MoMWeek24Card from "../projects/tableau/momWeek24";

class Projects extends Component {
  render() {
    var currentLink = window.location.href;
    var hashPosition = currentLink.lastIndexOf("#");
    var currentTab = currentLink.substring(hashPosition);
    return (
      <div>
        <div className="content">
          <div className="container h-100">
            <br /> <br /> <br />
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
                    (currentTab === "#all" || hashPosition === -1
                      ? " active"
                      : "")
                  }
                  id="all-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="all"
                  aria-selected={
                    currentTab === "#all" || hashPosition === -1
                      ? "true"
                      : "false"
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
                  className={
                    "nav-link" + (currentTab === "#react" ? " active" : "")
                  }
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
                  className={
                    "nav-link" + (currentTab === "#python" ? " active" : "")
                  }
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
            <br />
            <div className="tab-content" id="myTabContent">
              <div
                className={
                  "tab-pane fade" +
                  (currentTab === "#all" || hashPosition === -1
                    ? " show active"
                    : "")
                }
                id="all"
                role="tabpanel"
                aria-labelledby="all-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <PathfindingVisualizerCard />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <SortingVisualizerCard />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <Covid19IndiaDataCard />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <SudokuSolverCard />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <BattleOfNeighborhoodsCard />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <TextEditorCard />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <IrisFlowerClassificationCard />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <MoMWeek23Card />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <MoMWeek24Card />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  "tab-pane fade" +
                  (currentTab === "#react" ? " show active" : "")
                }
                id="react"
                role="tabpanel"
                aria-labelledby="react-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <PathfindingVisualizerCard />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  "tab-pane fade" +
                  (currentTab === "#python" ? " show active" : "")
                }
                id="python"
                role="tabpanel"
                aria-labelledby="python-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <SortingVisualizerCard />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <SudokuSolverCard />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <Covid19IndiaDataCard />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <TextEditorCard />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  "tab-pane fade" +
                  (currentTab === "#analysis" ? " show active" : "")
                }
                id="analysis"
                role="tabpanel"
                aria-labelledby="analysis-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <BattleOfNeighborhoodsCard />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <IrisFlowerClassificationCard />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  "tab-pane fade" +
                  (currentTab === "#tableau" ? " show active" : "")
                }
                id="tableau"
                role="tabpanel"
                aria-labelledby="tableau-tab"
              >
                <div className="container">
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <Covid19IndiaVizCard />
                    </div>
                    <div className="col d-flex justify-content-center">
                      <MoMWeek24Card />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col d-flex justify-content-center">
                      <MoMWeek23Card />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
