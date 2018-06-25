import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import RouteManager from './RouteManager/RouteManager';

const App = () => (
  <div className='app'>
    <h1>React Router Demo</h1>
    <Navigation />
    <RouteManager />
  </div>
);

export default App;
