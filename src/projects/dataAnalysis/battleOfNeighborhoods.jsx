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
        <CardActionArea onClick={this.handleClickOpen}>
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

/*
        {this.state.isOpen && (
          <Dialog
            fullScreen
            open={this.state.isOpen}
            onClose={this.handleClose}
            TransitionComponent={Transition}
          >
            <AppBar style={{ position: "relative" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={this.handleClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6">Sound</Typography>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem button>
                <ListItemText primary="Phone ringtone" secondary="Titania" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText
                  primary="Default notification ringtone"
                  secondary="Tethys"
                />
              </ListItem>
            </List>
          </Dialog>
        )}

          <Dialog
            open={this.state.isOpen}
            keepMounted
            maxWidth="lg"
            onClose={this.handleClose}
            aria-labelledby="battleOfNeighborhoodsDialogueLabel"
            aria-describedby="battleOfNeighborhoodsDialogueContent"
          >
            <DialogTitle id="battleOfNeighborhoodsDialogueLabel">
              {"Battle of Neighborhoods - Chennai"}
            </DialogTitle>
            <DialogContent>
              <img
                className="image"
                src="https://raw.githubusercontent.com/rohithaug/Battle-of-Neighborhoods-Chennai/master/images/5_example.png"
                onClick={this.handleShowDialog}
                alt="Battle of Neighborhoods - Chennai"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Agree
              </Button>
            </DialogActions>
          </Dialog>          
*/
