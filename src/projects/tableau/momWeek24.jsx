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
import ImageIcon from "@material-ui/icons/Image";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

class MoMWeek24Card extends Component {
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
            title="MoM Week 24"
          >
            <img
              src={require("../../media/week24Card.png")}
              alt="MoM Week 24"
              style={{
                marginTop: "2px",
                height: "208px",
              }}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Female High School Athletes
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              #MakeoverMonday viz for Week 24, 2020 on Participation Rates of
              Female High School Athletes in Different Sports.
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
            href="https://public.tableau.com/profile/rohithsp#!/vizhome/MakeoverMondayFemaleHighSchoolAthletesinDifferentSports/MakeoverMonday-2020-Week-24"
          >
            LIVE DASHBOARD
          </Button>
          <Button
            startIcon={<ImageIcon />}
            size="medium"
            color="primary"
            rel="noopener noreferrer"
            target="_blank"
            href="https://raw.githubusercontent.com/rohithaug/MakeoverMonday/master/week24.png"
          >
            IMAGE
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default MoMWeek24Card;
