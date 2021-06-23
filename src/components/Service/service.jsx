import React from "react";
import styles from "./service.module.css";

export default function Service(props) {
  const image = props.image;
  const text = props.text;
  return (
    <div className={styles.service}>
      {props.children}
      <h4 className={styles.boldText}>{props.title}</h4>
      <h4 className={styles.text}>{props.text}</h4>
    </div>
  )
}