import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import About from '../About/About'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Blog from '../Blog/Blog'

const RouteManager = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/projects' component={Projects}></Route>
    <Route exact path='/blog' component={Blog}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contact}></Route>
  </Switch>
)

export default RouteManager;
