import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion'
import { elastic as Menu } from 'react-burger-menu'

class Navigation extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <nav className={navBarContainer}>
        <ul>
          <li><NavLink exact to='/'>Home</NavLink></li>
          <li><NavLink exact to='/projects'>Projects</NavLink></li>
          <li><NavLink exact to='/blog'>Blog</NavLink></li>
          <li><NavLink exact to='/about'>About</NavLink></li>
          <li><NavLink exact to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    )
  }
};

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

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

const current = css({
  backgroundColor: '#4CAF50'
})

export default Navigation;
