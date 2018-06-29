import React from 'react';
import './Global.css';
import Navigation from './Navigation/Navigation';
import RouteManager from './RouteManager/RouteManager';
import { css } from 'emotion'
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Quicksand:400,700', 'sans-serif']
  }
});

const App = () => (
  <div className={app}>
    <Navigation />
    <RouteManager />
  </div>
);

const app = css({
  display: 'flex',
  flexDirection: 'column',
})


export default App;
