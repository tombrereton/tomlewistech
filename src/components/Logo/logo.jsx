import React from "react";
import logo from "./logo.png";
import * as styles from "./logo.module.css";

export default function Logo(props) {
    return (
        <div>
            <img className={styles.headerLogo} src={logo} alt="Logo" style={{height: props.size}}/>
        </div>
    )
}