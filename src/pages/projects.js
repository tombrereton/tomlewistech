import React, { useEffect } from 'react'
import BigLink from '../components/BigLink/bigLink'
import * as styles from './pages.module.scss'
import Layout from '../components/Layout'
import soundsort from '../images/soundsort.png'
import gemIsland from '../images/gemIsland.png'
import Project from '../components/Project/project'

export default function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>

      <div className={styles.page}>
        <h3 className={styles.heading}>Some <span className={styles.highlight}>Projects</span></h3>

        <Project image={soundsort} title="SoundSort" url="https://soundsort.net" />
        <Project image={gemIsland} title="Gem Island" url="https://gemislandserverless.netlify.app/" />

        <BigLink />
      </div>
    </Layout>
  )
}