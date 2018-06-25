import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Main from './Main/Main';

const App = () => (
  <div className='app'>
    <h1>React Router Demo</h1>
    <Navigation />
    <Main />
  </div>
);

export default App;
