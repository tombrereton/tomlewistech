import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import RouteManager from './RouteManager/RouteManager';

const App = () => (
  <div className='app'>
    <Navigation />
    <RouteManager />
  </div>
);

export default App;
