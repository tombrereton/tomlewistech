import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MobileNavigation from "../Navigation/Navigation";
import NavigationWeb from "../NavigationWeb/NavigationWeb";
import logoInverted3 from "./logoInverted3.svg";
import { NavLink } from "react-router-dom";
import Media from "react-media";

const styles = {
  header: {
    flex: 1
  },
  toolbarClass: {
    display: 'flex',
    justifyContent: 'space-between'
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

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.toolbarClass}>
          <Media query="(max-width: 549px)" render={() => <MobileNavigation />} />
          <NavLink exact to="/">
            <Typography variant="subheading" color="inherit" className={classes.linkWeb}>
              Tom Lewis Tech
            </Typography>
          </NavLink>
          <Media query="(min-width: 550px)" render={() => <NavigationWeb />} />
          <NavLink exact to="/">
            <img src={logoInverted3} height="40" alt="logo" />
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
