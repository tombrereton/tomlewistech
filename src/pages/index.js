import React from 'react'
import Service from '../components/Service/service'
import * as styles from './pages.module.scss'
import soundsort from '../images/soundsort.png'
import gemIsland from '../images/gemIsland.png'
import Project from '../components/Project/project'
import BigLink from '../components/BigLink/bigLink'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "gatsby";


export default function Home() {
  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <div className={styles.page}>
          <div className={styles.introSection}>
            <h3 className={styles.heading}>Hi, I'm <Link to="/about" className={styles.heading}><span className={`${styles.highlight} ${styles.underline}`}>Tom</span></Link></h3>
            <h4 className={styles.subHeading}>A web developer & software architect</h4>
            <p className={styles.textBody}>I'm an Australian who enjoys strumming the guitar, skating and has a weakness for bacon & egg rolls on a Saturday morning.</p>
          </div>
          <h3 className={styles.sectionHeading}>How I Can <span className={styles.highlight}>Help</span></h3>
          <div className={styles.servicesSection}>
            <Service title={"Website & UI Design"} text={"Using a mobile-first approach, with simplicity & conversion in mind"}>
              <FontAwesomeIcon icon="desktop" size={"4x"} color={"#009B95"} />
            </Service>
            <Service title={"User Testing & UX Design"} text={"Get feedback on how easy your website is to use before (or after) launch."}>
              <FontAwesomeIcon icon="user-check" size={"4x"} color={"#009B95"} />
            </Service>
            <Service title={"Branding"} text={"Together, we come up with a brand strategy for your company, which also includes the core identity elements e.g. Logo, Messaging, Fonts, Colour pallette, Visual Language."}>
              <FontAwesomeIcon icon="eye" size={"4x"} color={"#009B95"} />
            </Service>
            <Service title={"Website Building"} text={"Websites can range from a single page to a company website, or to a full e-commerce website."}>
              <FontAwesomeIcon icon="cog" size={"4x"} color={"#009B95"} />
            </Service>
            <Service title={"Search Engine Optimisation (SEO)"} text={"Build websites with SEO optimisation so they appear in the top results for Google or other search providers."}>
              <FontAwesomeIcon icon="chart-area" size={"4x"} color={"#009B95"} />
            </Service>
            <Service title={"Company Email Setup"} text={"Give you a professional email domain through Google Workplace or Office 365."}>
              <FontAwesomeIcon icon="mail-bulk" size={"4x"} color={"#009B95"} />
            </Service>
            <Service title={"Marketing"} text={"Increase traffic to your website by setting up online ads through Google and Instagram."}>
              <FontAwesomeIcon icon="camera-retro" size={"4x"} color={"#009B95"} />
            </Service>
          </div>
          <h2 className={styles.sectionHeading}>Some <span className={styles.highlight}>Projects</span></h2>
          <div className={styles.projectsSection}>
            <Project image={soundsort} title="SoundSort" url="https://soundsort.net" />
            <Project image={gemIsland} title="Gem Island" url="https://gemislandserverless.netlify.app/" />
          </div>
          <BigLink />

        </div>
      </div>
    </Layout>
  )
}