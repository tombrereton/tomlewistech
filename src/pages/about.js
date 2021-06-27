import React, { useEffect } from 'react'
import BigLink from '../components/BigLink/bigLink'
import ProfilePic from '../components/ProfilePic/profilePic'
import * as styles from './pages.module.scss'
import Layout from '../components/Layout'

export default function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>

      <div className={styles.page}>
        <h3 className={styles.heading}>A little bit about <span className={styles.highlight}>me</span></h3>

        <div className={styles.profileImg}>
          <ProfilePic size={200} />
        </div>

        <h4 className={styles.firstSectionHeading}>Who am I?</h4>
        <p className={styles.bigTextBody}>I’m a web developer and software architect with extensive experience building websites, APIs and back end services. This experience includes working as a software engineer at ASOS,  an e-commerce company which handles millions of user per day.</p>
        <p className={styles.bigTextBody}>As a consultant, I’ve worked with businesses of all shapes and sizes to help them reach their highest potential through increased online visibility, and providing elegant and effective solutions. With a Masters in Computer Science from the University of Birmingham and having worked in both Australia and the UK, I’m able to provide specialised services in line with your needs.</p>

        <h4 className={styles.sectionHeading}>Why do I love what I do?</h4>
        <p className={styles.bigTextBody}>My experiences, both educationally and professionally, have led me to successfully enable small to medium size businesses to be visible online. I enjoy meeting new people and providing efficient and elegant solutions to empower their businesses and products to reach their highest potential</p>

        <h4 className={styles.sectionHeading}>How did I get here?</h4>
        <p className={styles.bigTextBody}>Whilst studying and working as a structural engineer I developed a strong interest in programming when automating structural engineering calculations. After becoming infatuated with the intricacies of programming, I made my move into software engineering where my interest has matured into a passion for helping businesses grow through building elegant websites, creating an online presence and bespoke cloud-based software solutions. </p>
        <BigLink />
      </div>
    </Layout>
  )
}
