import React from 'react'
import Service from '../components/Service/service'
import styles from './pages.module.css'
import responsive from '../data/services/responsive.svg'

export default () => (
  <div className={styles.home}>
    <h1 className={styles.heading}>Hello, I'm <span className={styles.highlight}>Tom</span></h1>
    <h3 className={styles.subHeading}>Web Developer & Online Presence Consultant</h3>
    <h2 className={styles.sectionHeading}>How I Can <span className={styles.highlight}>Help</span></h2>
    <Service image={responsive} text={"Build you a fast, responsive website. Optimised for both mobile and desktop."}/>
  </div>
)
