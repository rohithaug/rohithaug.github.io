import React, { Component } from "react";
import "../../styling/projects.css";

//Import Projects
//React
import PathfindingVisualizerCard from "./react/pathfindingVisualizer";
//Python
import SortingVisualizerCard from "./python/sortingVisualizer";
import SudokuSolverCard from "./python/sudokuSolver";
import TextEditorCard from "./python/textEditor";
import Covid19IndiaDataCard from "./python/covid19IndiaData";
//Data Analysis
import BattleOfNeighborhoodsCard from "./dataAnalysis/battleOfNeighborhoods";
import IrisFlowerClassificationCard from "./dataAnalysis/irisFlowerClassification";
//Tableau
import Covid19IndiaVizCard from "./tableau/covid19IndiaViz";
import MoMWeek23Card from "./tableau/momWeek23";
import MoMWeek24Card from "./tableau/momWeek24";

class NavTabCards extends Component {
  render() {
    const { hashPosition, currentTab } = this.props;
    return (
      <div className="tab-content" id="myTabContent">
        <div
          className={
            "tab-pane fade" +
            (currentTab === "#all" || hashPosition === -1 ? " show active" : "")
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
            "tab-pane fade" + (currentTab === "#react" ? " show active" : "")
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
            "tab-pane fade" + (currentTab === "#python" ? " show active" : "")
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
            "tab-pane fade" + (currentTab === "#analysis" ? " show active" : "")
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
            "tab-pane fade" + (currentTab === "#tableau" ? " show active" : "")
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
    );
  }
}

export default NavTabCards;
