import React from "react";
import styles from "./service.module.css";

export default function Service(props) {
  const image = props.image;
  const text = props.text;
  return (
    <div className={styles.service}>
      <img className={styles.serviceImg} src={image} />
      <h4 className={styles.text}>{props.text}</h4>
    </div>
  )
}