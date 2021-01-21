import React from "react";
import logo from "./logo.png";
import styles from "./header.module.css";

export default () => (
    <div>
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <img className={styles.headerLogo} src={logo} />
                <p className={styles.company}>Tom Lewis Tech</p>
            </div>
        </div>
        <div className={styles.emptyDiv}>
        </div>
    </div>
);