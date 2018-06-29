import React from 'react';
import styled, { css } from 'react-emotion'

const Home = () => (
    <div className={homeContainer}>
        <h1>Welcome to my portfolio website</h1>
        <p> Feel free to browse around and learn more about me.</p>
    </div>
);

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const styles = css({
  color: 'green',
  [mq[0]]: {
    color: 'gray'
  },
  [mq[1]]: {
    color: 'hotpink'
  }
})


const homeContainer = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#EFEFEF',
  height: '100vh'
})

export default Home;