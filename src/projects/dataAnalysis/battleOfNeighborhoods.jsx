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

class BattleOfNeighborhoodsCard extends Component {
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
            title="Battle of Neighborhoods"
          >
            <img
              src={
                "https://raw.githubusercontent.com/rohithaug/Battle-of-Neighborhoods-Chennai/master/images/5_example.png"
              }
              alt="Battle of Neighborhoods"
              style={{
                height: "210px",
              }}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Battle of Neighborhoods
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Use Foursquare API, Folium visualization library, k-means
              clustering algorithm and silhouette score to cluster neighborhoods
              of Chennai, The Detroit of India. to help Business people start
              Restaurants, Hotels.
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
            href="https://github.com/rohithaug/Battle-of-Neighborhoods-Chennai"
          >
            GITHUB
          </Button>
          <Button
            startIcon={<OpenInNewIcon />}
            size="medium"
            color="primary"
            rel="noopener noreferrer"
            target="_blank"
            href="https://nbviewer.jupyter.org/github/rohithaug/Battle-of-Neighborhoods-Chennai/blob/master/Project%20Notebook.ipynb"
          >
            NOTEBOOK
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default BattleOfNeighborhoodsCard;
