import React from "react";
import * as styles from "./project.module.css";

export default function Project(props) {
  const image = props.image;
  const url = props.url;
  return (
    <a href={url}>
      <div className={styles.project}>
        <img className={styles.projectImg} src={image} alt="project screen preview"/>
      </div>
      <h4 className={styles.title}>{props.title}</h4>
    </a>
  )
}