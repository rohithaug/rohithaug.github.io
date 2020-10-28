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
import ImageIcon from "@material-ui/icons/Image";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

class Covid19IndiaVizCard extends Component {
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
              Visualize the covid-19 data of India as of 8th May 2020 - IST
              05:00 P.M.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            startIcon={<OpenInNewIcon />}
            size="medium"
            color="primary"
            rel="noopener noreferrer"
            target="_blank"
            href="https://public.tableau.com/profile/rohithsp#!/vizhome/Indiacovid-19data/covid19data"
          >
            LIVE DASHBOARD
          </Button>
          <Button
            startIcon={<ImageIcon />}
            size="medium"
            color="primary"
            rel="noopener noreferrer"
            target="_blank"
            href="https://raw.githubusercontent.com/rohithaug/India-covid-19-data/master/visualization/sample_4.jpg"
          >
            IMAGE
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Covid19IndiaVizCard;