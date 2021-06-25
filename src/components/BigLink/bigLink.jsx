import React from "react";
import * as styles from "./bigLink.module.css";

export default function BigLink(props) {
  const url = "mailto:tom@tomlewis.tech?subject=[TLT] I'd Like a Website&body=Hi Tom,";
  return (
    <div className={styles.bigLinkSection}>
      <a className={styles.bigLink} href={url}>
        <h1 className={styles.text}>SAY HI</h1>
      </a>
    </div>
  )
}