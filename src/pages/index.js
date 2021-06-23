import React from 'react'
import Service from '../components/Service/service'
import styles from './pages.module.css'
import responsive from '../data/services/responsive.svg'
import soundsort from '../data/projects/soundsort.png'
import Project from '../components/Project/project'
import BigLink from '../components/BigLink/bigLink'
import { Link } from 'components/Router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faCameraRetro, faUserCheck, faChartArea, faCog, faEye, faMailBulk } from '@fortawesome/free-solid-svg-icons'

export default () => (
  <div className={styles.pageWrapper}>
    <div className={styles.page}>
      <h3 className={styles.heading}>Hello, I'm <span className={`${styles.highlight} ${styles.underline}`}><Link to="/about">Tom</Link></span></h3>
      <h4 className={styles.subHeading}>A web developer & software architect</h4>
      <p className={styles.textBody}>I'm also an Australian with a deep love for spicy food and a weakness for bacon & egg rolls on a Saturday morning.</p>
      <h3 className={styles.sectionHeading}>How I Can <span className={styles.highlight}>Help</span></h3>
      <Service title={"Website & UI Design"} text={"Optimise for the modern landscape and use a mobile-first approach then scale up."}>
        <FontAwesomeIcon icon={faDesktop} size={"4x"} color={"#009B95"} />
      </Service>
      <Service title={"User Testing & UX Design"} text={"Get feedback on how easy your website is to use before (or after) launch."}>
        <FontAwesomeIcon icon={faUserCheck} size={"4x"} color={"#009B95"} />
      </Service>
      <Service title={"Branding"} text={"Become recognisable."}>
        <FontAwesomeIcon icon={faEye} size={"4x"} color={"#009B95"} />
      </Service>
      <Service title={"Website Building"} text={"Websites can range from a single page to a full e-commerce website."}>
        <FontAwesomeIcon icon={faCog} size={"4x"} color={"#009B95"} />
      </Service>
      <Service title={"Search Engine Optimisation (SEO)"} text={"Build websites with SEO optimisation so they appear in Google or other search providers."}>
        <FontAwesomeIcon icon={faChartArea} size={"4x"} color={"#009B95"} />
      </Service>
      <Service title={"Company Email Setup"} text={"Give you a professional email domain through Google Suite or Office 365."}>
        <FontAwesomeIcon icon={faMailBulk} size={"4x"} color={"#009B95"} />
      </Service>
      <Service title={"Marketing"} text={"Increase traffic to your website by setting up online ads through Google and Instagram."}>
        <FontAwesomeIcon icon={faCameraRetro} size={"4x"} color={"#009B95"} />
      </Service>
      <h2 className={styles.sectionHeading}>Some <span className={styles.highlight}>Projects</span></h2>
      <Project image={soundsort} url="https://soundsort.net" />
      <BigLink />

    </div>
  </div>
)
