import React from "react";
import styles from "./header.module.css";
import Logo from "../Logo/logo";
import MenuButton from "./MenuButton";

export default function HeaderBox() {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <Logo />
                    <h5 className={styles.company}>Tom Lewis Tech</h5>
                </div>
                <div className={styles.headerRight}>
                    <MenuButton />
                </div>
            </div>
            <div className={styles.emptyDiv}>
            </div>
        </div>
    )
}