import React from 'react'
import styles from './pages.module.css'

export default () => (
  <div className={styles.home}>
    <h1 className={styles.heading}>Hello, I'm <span className={styles.highlight}>Tom</span></h1>
    <h3 className={styles.subHeading}>Web Developer & Online Presence Consultant</h3>
    <h2 className={styles.helpHeading}>How I Can <span className={styles.highlight}>Help</span></h2>
  </div>
)
