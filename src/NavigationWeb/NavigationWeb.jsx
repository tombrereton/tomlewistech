import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = {
  navigationWeb: {
    width: "100%",
    maxWidth: 300,
    display: "flex",
    justifyContent: "space-between",
    paddingRight: "2em",
  }
};

function NavigationWeb(props) {
  const { classes } = props;
  return (
    <div className={classes.navigationWeb}>
      <NavLink exact to="/">
        <Typography variant="subheading" color="inherit" className={classes.header}>
          Home
        </Typography>
      </NavLink>
      <NavLink exact to="/projects">
        <Typography variant="subheading" color="inherit" className={classes.header}>
          Projects
        </Typography>
      </NavLink>
      <NavLink exact to="/blog">
        <Typography variant="subheading" color="inherit" className={classes.header}>
          Blog
        </Typography>
      </NavLink>
      <NavLink exact to="/about">
        <Typography variant="subheading" color="inherit" className={classes.header}>
          About
        </Typography>
      </NavLink>
      <NavLink exact to="/contact">
        <Typography variant="subheading" color="inherit" className={classes.header}>
          Contact
        </Typography>
      </NavLink>
    </div>
  );
}

NavigationWeb.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavigationWeb);
