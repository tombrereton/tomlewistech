import React from 'react'
import MenuButton from './MenuButton'
import logo from './logo.png'
import styles from './header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img src={logo} />
                <p className={styles.company}>Tom Lewis Tech</p>
            </div>
            <MenuButton />
        </div>
    )
}