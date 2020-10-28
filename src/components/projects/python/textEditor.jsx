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

class TextEditorCard extends Component {
  state = {};
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
            title="Text Editor"
          >
            <img
              src={
                "https://raw.githubusercontent.com/rohithaug/text-editor/master/images/sample.png"
              }
              alt="Text Editor"
              style={{
                height: "210px",
              }}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Text Editor
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Simple text editor buitl using Python and tkinter with modules
              such as Menu Bar, Scroll Bar, Popup Menu, etc., and Menu options
              such as File, View, etc. Easy to add additional features.
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
            href="https://github.com/rohithaug/text-editor"
          >
            GITHUB
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default TextEditorCard;
