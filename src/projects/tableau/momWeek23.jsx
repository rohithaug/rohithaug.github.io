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

class MoMWeek23Card extends Component {
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
            title="MoM Week 23"
          >
            <img
              src={require("../../media/week23.png")}
              alt="MoM Week 23"
              style={{
                height: "210px",
              }}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Animal-free products consumption
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              #MakeoverMonday visualization for Week 23, 2020 on Animal-free
              products consumption in Great Britain.
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
            href="https://public.tableau.com/profile/rohithsp#!/vizhome/MakeoverMonday-2020-Week-23/MakeoverMonday-2020-Week-23"
          >
            LIVE DASHBOARD
          </Button>
          <Button
            startIcon={<ImageIcon />}
            size="medium"
            color="primary"
            rel="noopener noreferrer"
            target="_blank"
            href="https://raw.githubusercontent.com/rohithaug/MakeoverMonday/master/week23.png"
          >
            IMAGE
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default MoMWeek23Card;
