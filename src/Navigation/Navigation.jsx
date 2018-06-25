import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact activeClassName={css(styles.current)} to='/'>Home</NavLink></li>
      <li><NavLink exact activeClassName={css(styles.current)} to='/about'>About</NavLink></li>
      <li><NavLink exact activeClassName={css(styles.current)} to='/contact'>Contact</NavLink></li>
    </ul>
  </nav>
);

const styles = StyleSheet.create({
  current: {
      fontWeight: 'bold'
  },
});

export default Navigation;
