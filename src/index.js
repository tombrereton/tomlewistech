import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-123493414-1');
ReactGA.pageview(window.location.pathname + window.location.search);


ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
