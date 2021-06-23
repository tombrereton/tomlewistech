import React from "react";
import styles from "./footer.module.css";
import copyright from "./copyright.svg";
import Logo from "../Logo/logo";

export default function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.companySection}>
        <p className={styles.footerText}>Designed and built by<span className={styles.companyText}> Tom Lewis Tech</span></p>
        <p className={styles.footerText}>Email: tom@tomlewis.tech</p>
      </div>
      <div className={styles.copyrightSection}>
        <img className={styles.copyrightImg} src={copyright} /><p className={styles.footerText}>Copyright 2020 Tom Lewis Tech Ltd</p>
      </div>
    </div>
  )
}