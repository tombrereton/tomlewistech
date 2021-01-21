import React from "react";
import styles from "./footer.module.css";
import copyright from "./copyright.svg";
import Logo from "../Logo/logo";

export default function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.companySection}>
        <p className={styles.footerText}>Designed and built by</p><h5 className={styles.companyText}> Tom Lewis Tech</h5>
      </div>
      <div className={styles.copyrightSection}>
        <img className={styles.copyrightImg} src={copyright} /><p className={styles.footerText}>Copyright 2020 Tom Lewis Tech Ltd</p>
      </div>
    </div>
  )
}