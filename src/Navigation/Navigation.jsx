import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion'
import NavigationList from '../NavigationList/NavigationList'
import BurgerIcon from '@material-ui/icons/Dehaze';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Navigation extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
      <NavigationList />
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}><BurgerIcon /></Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { css } from 'emotion'

// class Navigation extends React.Component {
//   showSettings(event) {
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <nav className={navBarContainer}>
//         <ul>
//           <li><NavLink exact to='/'>Home</NavLink></li>
//           <li><NavLink exact to='/projects'>Projects</NavLink></li>
//           <li><NavLink exact to='/blog'>Blog</NavLink></li>
//           <li><NavLink exact to='/about'>About</NavLink></li>
//           <li><NavLink exact to='/contact'>Contact</NavLink></li>
//         </ul>
//       </nav>
//     )
//   }
// };

const navBarContainer = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 68,
  backgroundColor: '#FFFFFF',
  '& ul': {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    listStyleType: 'none'
  },
  '& li a': {
    display: 'block',
    color: '#707070',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    textDecoration: 'none'
  },
})

// export default Navigation;
