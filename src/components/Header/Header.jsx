import React from 'react';
import logo from './logo.png';
import styles from './header.module.css';

export default () => (
    <div className={styles.header}>
        <img src={logo} />
        <p className={styles.company}>Tom Lewis Tech</p>
    </div >
)