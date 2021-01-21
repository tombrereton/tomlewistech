import React from "react";
import styles from "./header.module.css";
import Logo from "../Logo/logo";

export default function Header() {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <Logo />
                    <h5 className={styles.company}>Tom Lewis Tech</h5>
                </div>
            </div>
            <div className={styles.emptyDiv}>
            </div>
        </div>
    )
}