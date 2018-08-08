import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = {
  button: {
    borderRadius: 5,
    fontSize: "medium",
    minWidth: 200,
  },
  buttonText: {
    paddingLeft: 10,
    fontWeight: 600
  }
};

function ContactExternalButton(props) {
  const { classes } = props;
  return (
    <Button
      variant="extendedFab"
      aria-label="delete"
      className={classes.button}
      color="secondary"
      href={props.externalUrl}
    >
      {props.children}
      <span className={classes.buttonText}>{props.text}</span>
    </Button>
  );
}

ContactExternalButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactExternalButton);
