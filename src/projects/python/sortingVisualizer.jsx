import React, { Component } from "react";
import "../../styling/projects.css";
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

class SortingVisualizerCard extends Component {
  render() {
    return (
      <Card className="root">
        <CardActionArea>
          <CardMedia
            className="media"
            style={{ height: "210px" }}
            image="https://raw.githubusercontent.com/rohithaug/sorting-visualizer/master/sample.gif"
            title="Sorting Visualizer"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Sorting Visualizer
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A Graphical User Interface built in Python for visualizing Sorting
              Algorithms such as Bubble Sort, Quick Sort, Heap Sort, Tim Sort,
              Heap Sort, Radix Sort, etc. The GUI is built using Pygame.
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
            href="https://github.com/rohithaug/sorting-visualizer"
          >
            GITHUB
          </Button>
          <Button
            startIcon={<OpenInNewIcon />}
            size="medium"
            color="primary"
            rel="noopener noreferrer"
            target="_blank"
            href="https://youtu.be/NuB8QzFDjrQ"
          >
            VIDEO
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default SortingVisualizerCard;
