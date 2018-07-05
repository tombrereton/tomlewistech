import React from 'react';
import './Global.css';
import RouteManager from './RouteManager/RouteManager';
import { css } from 'emotion'
import WebFont from 'webfontloader';
import Header from './Header/Header'

WebFont.load({
  google: {
    families: ['Quicksand:300', 'sans-serif']
  }
});

const App = () => (
  <div className={app}>
    <Header />
    <RouteManager />
  </div>
);

const app = css({
  display: 'flex',
  flexDirection: 'column',
})


export default App;
