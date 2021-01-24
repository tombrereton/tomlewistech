import React from 'react'
import styles from './header.module.css'
import closedMenu from './Closed.svg'

function Toggle() {
    if (typeof document !== 'undefined') {
        var body = document.body;
        var overlay = document.getElementsByClassName(styles.overlay)[0];
        var menuButton = document.getElementsByClassName(styles.menu)[0];

        overlay.style.display === "flex" ? overlay.style.display = "none" : overlay.style.display = "flex"
        overlay.style.display === "flex" ? menuButton.style.background = "#009B95" : menuButton.style.background = "#F9F9F9"
        overlay.style.display === "flex" ? body.style.overflowY = "hidden" : body.style.overflowY = ""
    }
}

export default function MenuButton() {
    return (
        <div className={styles.menuContainer}>
            <button onClick={() => Toggle()} className={styles.menu}>
                <img className={styles.menuClosed} src={closedMenu} />
            </button>
            <div className={styles.overlay}>
                <h1>HOME</h1>
            </div>
        </div>
    )
}