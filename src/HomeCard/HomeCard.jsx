import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = {
  skillContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "2em",
    paddingBottom: "2em"
  }
};

function HomeCard(props) {
  const classes = props;
  return (
    <div className={classes.homeCardContainer}>
      <div className={classes.cropContainer}>
        <img src={props.children} alt={"Image of" + props.pageTitle} />
      </div>
      <Typography variant="title" style={{ paddingTop: "0.5em", paddingBottom: "0.3em" }}>
        {props.pageTitle}
      </Typography>
      <Typography variant="subheading">{props.pageSummary}</Typography>
    </div>
  );
}

HomeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeCard);
