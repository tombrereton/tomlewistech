import React, { useState } from 'react'
import styles from './header.module.css'
import openMenu from './Closed.svg'
import closeMenu from './Open.svg'
import BigLink from '../BigLink/bigLink';
import { Link } from 'components/Router'


function Toggle() {
    if (typeof document !== 'undefined') {
        var body = document.body;
        var overlay = document.getElementsByClassName(styles.overlay)[0];
        var menuButton = document.getElementsByClassName(styles.menu)[0];

        overlay.style.display === "flex" ? overlay.style.display = "none" : overlay.style.display = "flex"
        overlay.style.display === "flex" ? menuButton.style.background = "#009B95" : menuButton.style.background = "#F9F9F9"
        overlay.style.display === "flex" ? body.classList.add(styles.bodyNoScroll) : body.classList.remove(styles.bodyNoScroll);
    }
}


export default function MenuButton() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const ToggleMenuAndButton = () => {Toggle(); setIsMenuOpen(current => !current)}

    const openMenuButton =
        <button onClick={() => ToggleMenuAndButton()} className={styles.menu}>
            <img className={styles.menuClosed} src={openMenu} />
        </button>

    const closeMenuButton =
        <button onClick={() => ToggleMenuAndButton()} className={styles.menu}>
            <img className={styles.menuClosed} src={closeMenu} />
        </button>

    return (

        <div className={styles.menuContainer}>
            {isMenuOpen ? closeMenuButton : openMenuButton}
            <div className={styles.overlay}>
                <h1><Link onClick={() => ToggleMenuAndButton()} to="/">HOME</Link></h1>
                <h1><Link onClick={() => ToggleMenuAndButton()} to="/about">ABOUT ME</Link></h1>
                <BigLink />
            </div>
        </div>
    )
}