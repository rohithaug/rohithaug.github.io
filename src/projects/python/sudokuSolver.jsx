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

class SudokuSolverCard extends Component {
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
            title="Sudoku Solver"
          >
            <img
              src={
                "https://raw.githubusercontent.com/rohithaug/sudoku-solver/master/sudoku_gui_sample.gif"
              }
              alt="Text Editor"
              style={{
                height: "210px",
                width: "250px",
              }}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Sudoku Solver
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Sudoku generator, solver and a GUI that can be used to solve a
              sudoku manually or automatically using the concept of
              backtracking. The difficulty of the game can be varied as well.
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
            href="https://github.com/rohithaug/sudoku-solver"
          >
            GITHUB
          </Button>
          <Button
            startIcon={<OpenInNewIcon />}
            size="medium"
            color="primary"
            rel="noopener noreferrer"
            target="_blank"
            href="https://raw.githubusercontent.com/rohithaug/sudoku-solver/master/sudoku_gui_sample.gif"
          >
            VIDEO
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default SudokuSolverCard;
