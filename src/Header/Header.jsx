import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Navigation from '../Navigation/Navigation';

const styles = {
  flex: {
    flex: 1,
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Navigation />
          <Typography variant="subheading" color="inherit" className={classes.flex}>
            TLT
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
