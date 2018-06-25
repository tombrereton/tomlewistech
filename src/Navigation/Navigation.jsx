import React from 'react';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion'

const Navigation = () => (
  <nav>
    <ul className={navBarList}>
      <li><NavLink exact activeClassName={current} to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName={current} to='/projects'>Projects</NavLink></li>
      <li><NavLink exact activeClassName={current} to='/blog'>Blog</NavLink></li>
      <li><NavLink exact activeClassName={current} to='/about'>About</NavLink></li>
      <li><NavLink exact activeClassName={current} to='/contact'>Contact</NavLink></li>
    </ul>
  </nav>
);

const navBarList = css({
  position: 'fixed',
  top: 0,
  width: '100%',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  backgroundColor: '#333',
  '& li': {
    float: 'left',
    borderRight: '1px solid #bbb'
  },
  '& li:last-child': {
    borderRight: 'none'
  },
  '& li a': {
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none'
  },
  '& li a:hover': {
    backgroundColor: '#111'
  }
})

const current = css({
  backgroundColor: '#4CAF50'
})

export default Navigation;
