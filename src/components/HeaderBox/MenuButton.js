import React from 'react'
import styles from './header.module.css'
import closedMenu from './Closed.svg'

export default function MenuButton() {
    return (
        <button className={styles.menu}>
            <img className={styles.menuClosed} src={closedMenu} />
            <div className={styles.overlay}>
                <h1>HOME</h1>
            </div>
        </button>
    )
}