import React, { Component } from "react";
import "../../../styling/projects.css";
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

class PathfindingVisualizerCard extends Component {
  render() {
    return (
      <Card className="root">
        <CardActionArea>
          <CardMedia
            className="media"
            component="video"
            style={{ height: "210px" }}
            image={require("../../../media/pathfinding-visualizer.mp4")}
            title="Pathfinding Visualizer"
            controls
            autoPlay
            muted
            loop
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Pathfinding Visualizer
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Web Page built using React Framework to visualize Pathfinding
              Algorithms such as Dijkstra’s, A*, Breadth First Search, etc., and
              Maze Generation Algorithms such as Recursive Division, Vertical
              Division, etc.
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
            className="projectButtons"
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
            className="projectButtons"
          >
            LIVE DEMO
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default PathfindingVisualizerCard;
