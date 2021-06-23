import React from "react";
import { Link } from 'components/Router'
import styles from "./header.module.css";
import Logo from "../Logo/logo";
import MenuButton from "./MenuButton";

export default function HeaderBox() {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <Link to="/"><Logo /></Link>
                    <Link to="/"><h5 className={styles.company}>Tom Lewis Tech</h5></Link>
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