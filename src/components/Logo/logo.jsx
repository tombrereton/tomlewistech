import React from "react";
import logo from "./logo.png";
import styles from "./logo.module.css";

export default function Logo() {
    return (
        <div>
            <img className={styles.headerLogo} src={logo} />
        </div>
    )
}