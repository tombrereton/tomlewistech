import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectCard"

import matchThree from '../content/projects/matchThree/card.png';
import asog from '../content/projects/asog/card.png';
import soundSort from '../content/projects/soundSort/card.png';
import gitSetup from '../content/blog/myGitSetup/card.png';
import cicdSetup from '../content/blog/simpleCICD/card.png';
import retroSun from '../images/retro-sun-v1.svg';
import retroSunPng from '../images/retro-sun-v1.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={sunStyles}>
      <object data={retroSun} type="image/svg+xml">
        <img src={retroSunPng} />
      </object>
    </div>
    <p>Hi, I'm <span style={{ color: '#ffffff' }}>Tom</span>. I'm a web developer and software architect based in <span style={{ color: '#ffffff' }}>London</span>.</p>
    <p>My specialties range from building websites for restaurants to complex cloud solutions.</p>
    <h1 style={{ color: '#EB4C49' }}>PROJECTS</h1>
    <div style={projectShelfStyles}>
      <ProjectCard title="GEM ISLAND" imgSrc={matchThree} />
      <ProjectCard title="AS SEEN ON GRAM" imgSrc={asog} />
      <ProjectCard title="SOUNDSORT" imgSrc={soundSort} />
      <ProjectCard title="GEM ISLAND" imgSrc={matchThree} />
    </div>
    <h1 style={{ color: '#E03D5B' }}>BLOG</h1>
    <div style={projectShelfStyles}>
      <ProjectCard title="MY GIT SETUP" imgSrc={gitSetup} />
      <ProjectCard title="SETUP A SIMPLE CI/CD IN BASH" imgSrc={cicdSetup} />
    </div>
    <h1 style={{ color: '#C54F81' }}>CONTACT</h1>
    <p>tom@tomlewis.tech</p>
    <p><a href="https://www.linkedin.com/in/tbrereton/">LinkedIn</a></p>
    <p><a href=" https://github.com/tombrereton">Github</a></p>
  </Layout>
)

var sunStyles = {
  width: `250px`,
  margin: 'auto',
  marginBottom: '2em'
}

var projectShelfStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  overflowX: "auto",
  padding: "1em 0 1em 0",
  height: "auto",
}


export default IndexPage
