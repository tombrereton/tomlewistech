import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import FaceIcon from "@material-ui/icons/Face";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import "./NavigationStyles.css";

const styles = theme => ({
  listStyle: {
    width: "100%",
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper
  }
});

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.listStyle}>
      <List component="nav">
        <NavLink exact to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink>
        <NavLink exact to="/projects">
          <ListItem button>
            <ListItemIcon>
              <PermMediaIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
        </NavLink>
        <NavLink exact to="/blog">
          <ListItem button>
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem>
        </NavLink>
        <NavLink exact to="/about">
          <ListItem button>
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </NavLink>
        <NavLink exact to="/contact">
          <ListItem button>
            <ListItemIcon>
              <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
