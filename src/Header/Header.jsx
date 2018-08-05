import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Navigation from "../Navigation/Navigation";
import logoInverted2 from "./logoInverted2.svg";
import { NavLink } from "react-router-dom";

const styles = {
  header: {
    flex: 1
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Navigation />
          <Typography variant="subheading" color="inherit" className={classes.header}>
            Tom Lewis Tech
          </Typography>
          <NavLink exact to="/">
            <img src={logoInverted2} height="40" alt="logo" />
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
