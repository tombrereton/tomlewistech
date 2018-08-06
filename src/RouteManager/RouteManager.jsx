import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../About/About";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Project from "../Project/Project";
import Blog from "../Blog/Blog";
import BlogPost from "../BlogPost/BlogPost";

const RouteManager = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/projects/project/:slug" component={Project} />
    <Route exact path="/blog" component={Blog} />
    <Route exact path="/blog/post/:slug" component={BlogPost} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default RouteManager;
