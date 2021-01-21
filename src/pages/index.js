import React from 'react'
import Service from '../components/Service/service'
import styles from './pages.module.css'
import responsive from '../data/services/responsive.svg'

export default () => (
  <div className={styles.home}>
    <h1 className={styles.heading}>Hello, I'm <span className={styles.highlight}>Tom</span></h1>
    <h3 className={styles.subHeading}>Web Developer & Online Presence Consultant</h3>
    <h2 className={styles.sectionHeading}>How I Can <span className={styles.highlight}>Help</span></h2>
    <div>
      <Service image={responsive} text={"Build you a fast, responsive and unique website. Optimised for both mobile and desktop."} />
      <Service image={responsive} text={"Setup Google or Instagram ads to increase your traffic massively."} />
      <Service image={responsive} text={"Put you on Google Maps with a full business profile to maximise your presence "} />
      <Service image={responsive} text={"Add analytics to track website traffic and measure online impact"} />
      <Service image={responsive} text={"Help setup a business Newsletter to retain existing customers"} />
    </div>
  </div>
)
