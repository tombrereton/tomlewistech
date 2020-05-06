import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { slide as Menu } from 'react-burger-menu'

import Logo from "../components/logo"

const Header = ({ siteTitle }) => (
  <header style={styles}>
    <div style={{ width: `40px` }}>
      <Logo />
    </div>
    <div style={{ width: `40px` }}>
      <Menu disableAutoFocus right styles={menuStyles}>
        <a id="home" className="menu-item" href="/">HOME</a>
        <a id="projects" className="menu-item" href="/projects">PROJECTS</a>
        <a id="blog" className="menu-item" href="/blog">BLOG</a>
        <a id="contact" className="menu-item" href="/contact">CONTACT</a>
      </Menu>
    </div>
  </header>
)

var styles = {
  position: 'fixed',
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: '20px',
  paddingTop: '20px',
  paddingLeft: '20px',
  paddingBottom: '10px',
  backgroundColor: '#131313',
  width: '100vw',
  boxShadow: '0 20px 20px #131313'
}

var menuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    right: '20px',
    top: '26px'
  },
  bmBurgerBars: {
    background: '#959595',
    height: '2px'
  },
  bmCross: {
    background: '#959595'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: 0,
  },
  bmMenu: {
    background: '#131313',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '1em'
  },
  bmItem: {
    padding: '1em'
  },
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
