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
  listStyleType: 'none',
  margin: 0,
  padding: 0,
})

const current = css({
  fontWeight: 'bold'
})

export default Navigation;
