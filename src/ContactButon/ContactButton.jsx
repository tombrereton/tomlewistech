import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Slide } from "@material-ui/core";
import {Link} from 'react-router-dom'

const styles = {
  button: {
    borderRadius: 5,
    position: "fixed",
    bottom: "2em",
    fontSize: "large"
  },
  buttonText: {
    paddingLeft: 10
  }
}

function ContactButton(props) {
  const { classes } = props;
  return (
    <Slide direction="up" in style={{ transitionDelay: 301 }}>
      <Button
        variant="extendedFab"
        aria-label="delete"
        className={classes.button}
        color="secondary"
        component={Link}
        to="/contact"
      >
        <QuestionAnswerIcon />
        <span className={classes.buttonText}>{props.text}</span>
      </Button>
    </Slide>
  );
}

ContactButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactButton);
