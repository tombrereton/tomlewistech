import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  homeCardContainer: {
    background: "black",
    width: "100vw",
  }
}

function HomeCard(props) {
  const { classes } = props;
  return (
    <div className={classes.homeCardContainer}>
      Projects
    </div>
  );
}

HomeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeCard);
