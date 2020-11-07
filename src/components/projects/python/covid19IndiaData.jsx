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

class Covid19IndiaDataCard extends Component {
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
            title="India covid-19 data"
          >
            <img
              src={
                "https://raw.githubusercontent.com/rohithaug/India-covid-19-data/master/visualization/sample_4.jpg"
              }
              alt="India covid-19 data"
              style={{
                height: "210px",
              }}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              India covid-19 data
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Extract and visualize the covid data from the json file provided
              at (https://api.covid19india.org/) using Python and SQLite.
              Tableau is used to build a visualization dashboard using the csv
              file saved by Python.
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
            href="https://github.com/rohithaug/India-covid-19-data"
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
            href="https://public.tableau.com/profile/rohithsp#!/vizhome/Indiacovid-19data/covid19data"
            className="projectButtons"
          >
            LIVE DASHBOARD
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Covid19IndiaDataCard;
