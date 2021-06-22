import React from 'react'
import Service from '../components/Service/service'
import styles from './pages.module.css'
import responsive from '../data/services/responsive.svg'
import soundsort from '../data/projects/soundsort.png'
import Project from '../components/Project/project'
import BigLink from '../components/BigLink/bigLink'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faCameraRetro, faMapMarkedAlt, faChartArea, faCog} from '@fortawesome/free-solid-svg-icons'

export default () => (
  <div className={styles.home}>
    <h1 className={styles.heading}>Hello, I'm <span className={`${styles.highlight} ${styles.underline}`}>Tom.</span></h1>
    <h3 className={styles.subHeading}>Web Developer & Online Presence Consultant.</h3>
    <h2 className={styles.sectionHeading}>How I Can <span className={styles.highlight}>Help</span></h2>
    <Service text={"Build you a fast and intuitive website. Optimised for both mobile and desktop."}>
      <FontAwesomeIcon icon={faDesktop} size={"4x"} />
    </Service>
    <Service text={"Setup Google or Instagram ads to increase your traffic massively."}>
      <FontAwesomeIcon icon={faCameraRetro} size={"4x"} />
    </Service>
    <Service text={"Put you on Google Maps with a full business profile to maximise your presence."}>
      <FontAwesomeIcon icon={faMapMarkedAlt} size={"4x"} />
    </Service>
    <Service text={"Add analytics to track website traffic and measure online impact."}>
      <FontAwesomeIcon icon={faChartArea} size={"4x"} />
    </Service>
    <Service text={"Design & Build complex software solutions where bespoke functionality is needed."}>
      <FontAwesomeIcon icon={faCog} size={"4x"} spin />
    </Service>
    <h2 className={styles.sectionHeading}>Some <span className={styles.highlight}>Projects</span></h2>
    <Project image={soundsort} url="https://soundsort.net" />
    <BigLink />
  </div>
)
