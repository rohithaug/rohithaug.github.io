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

class IrisFlowerClassificationCard extends Component {
  render() {
    return (
      <Card className="root">
        <CardActionArea>
          <CardMedia
            className="media"
            style={{
              height: "210px",
              display: "flex",
              justifyContent: "center",
            }}
            title="Iris Flower Classification"
          >
            <img
              src={
                "https://raw.githubusercontent.com/rohithaug/iris-flower-classification/master/iris_flower_tree.png"
              }
              alt="Iris Flower Classification"
              style={{
                height: "210px",
                maxWidth: 400,
              }}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Iris Flower Classification
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Compare the accuracy of different classification algorithms to
              find the best classifier.The final_model computed can be used to
              predict the class of the iris flowers given its attribute
              information.
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
            href="https://github.com/rohithaug/iris-flower-classification"
          >
            GITHUB
          </Button>
          <Button
            startIcon={<OpenInNewIcon />}
            size="medium"
            color="primary"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/rohithaug/iris-flower-classification/blob/master/iris_classification.ipynb"
          >
            NOTEBOOK
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default IrisFlowerClassificationCard;
