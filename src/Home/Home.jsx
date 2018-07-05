import React from 'react';
import {
  css
} from 'react-emotion'
import Button from '@material-ui/core/Button';

const Home = () => (
  <div >
        <h1>Welcome to my portfolio website</h1>
        <p> Feel free to browse around and learn more about me.</p>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
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

export default Home;
