import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styling/projects.css";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

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
                    hash: "#react",
                  }}
                  className={
                    "nav-link" +
                    (currentTab === "#react" || hashPosition === -1
                      ? " active"
                      : "")
                  }
                  id="react-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="react"
                  aria-selected={
                    currentTab === "#react" || hashPosition === -1
                      ? "true"
                      : "false"
                  }
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
                  (currentTab === "#react" || hashPosition === -1
                    ? " show active"
                    : "")
                }
                id="react"
                role="tabpanel"
                aria-labelledby="react-tab"
              >
                <div className="container">
                  <div className="row">
                    <Card className="root">
                      <CardActionArea>
                        <CardMedia
                          className="media"
                          style={{ height: "250px" }}
                          image={require("../media/pathfinding-visualizer.jpg")}
                          title="Pathfinding Visualizer"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Pathfinding Visualizer
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Website built using React Framework for visualizing
                            Pathfinding and Maze Generation Algorithms.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button
                          startIcon={<GitHubIcon />}
                          size="medium"
                          color="primary"
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://github.com/rohithaug/pathfinding-visualizer"
                        >
                          GITHUB
                        </Button>
                        <Button
                          startIcon={<OpenInNewIcon />}
                          size="medium"
                          color="primary"
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://rohithaug.github.io/pathfinding-visualizer/"
                        >
                          LIVE DEMO
                        </Button>
                      </CardActions>
                    </Card>
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
                Python Tab
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
                Data Analysis Tab
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
                Tableau Tab
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
