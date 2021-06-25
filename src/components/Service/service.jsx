import React from "react";
import * as styles from "./service.module.css";

export default function Service(props) {
  return (
    <div className={styles.service}>
      {props.children}
      <h4 className={styles.subHeading}>{props.title}</h4>
      <p className={styles.text}>{props.text}</p>
    </div>
  )
}