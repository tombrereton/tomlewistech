import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";

const styles = {
  homeCardContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    background: "#fff",
    color: "#727373",
    width: "100vw",
    minHeight: "25vh",
    fontSize : "2.5em"
  }
}

function HomeCard(props) {
  const { classes } = props;
  if (props.swap === true) {
    return (
      <div className={classes.homeCardContainer} style={{ background: props.background, color: props.color }}>
        {props.menuItemName}
        {props.children}
      </div>
    );
  }
  return (
    <div className={classes.homeCardContainer} style={{ background: props.background, color: props.color }}>
      {props.children}
      {props.menuItemName}
    </div>
  );
}

HomeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeCard);
