import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";


const styles = theme => ({
  button: {
    position: 'fixed',
    bottom: 10,
  },
});

function FloatingButton(props) {
  const { classes } = props;
  return (
      <Button variant="extendedFab" aria-label="delete" className={classes.button} color='secondary'>
        <QuestionAnswerIcon className={classes.extendedIcon} />
         
        Contact me
      </Button>
  );
}

FloatingButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingButton);
