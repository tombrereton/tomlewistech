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
    paddingRight: "2em"
  },
  linkWeb: {
    textDecoration: "none",
    color: "#727373",
    "&:hover": {
      textDecoration: "underline",
      textDecorationColor: "#a2a2a2"
    }
  }
};

function NavigationWeb(props) {
  const { classes } = props;
  return (
    <div className={classes.navigationWeb}>
      <NavLink exact to="/">
        <Typography variant="subheading" color="inherit" className={classes.linkWeb}>
          Home
        </Typography>
      </NavLink>
      <NavLink exact to="/projects">
        <Typography variant="subheading" color="inherit" className={classes.linkWeb}>
          Projects
        </Typography>
      </NavLink>
      <NavLink exact to="/blog">
        <Typography variant="subheading" color="inherit" className={classes.linkWeb}>
          Blog
        </Typography>
      </NavLink>
      <NavLink exact to="/about">
        <Typography variant="subheading" color="inherit" className={classes.linkWeb}>
          About
        </Typography>
      </NavLink>
      <NavLink exact to="/contact">
        <Typography variant="subheading" color="inherit" className={classes.linkWeb}>
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
