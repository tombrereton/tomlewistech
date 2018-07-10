import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import { Slide } from '@material-ui/core';


const styles = theme => ({
  button: {
    position: 'fixed',
    bottom: 10,
  },
});

function ContactButton(props) {
  const { classes } = props;
  return (
    <Slide direction="up" in style={{transitionDelay:301}}>
      <Button variant="extendedFab" aria-label="delete" className={classes.button} color='secondary'>
        <QuestionAnswerIcon />
        {props.text}
      </Button>
    </Slide>
  );
}

ContactButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactButton);
