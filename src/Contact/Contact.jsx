import React from "react";
import HighlightText from "../HighlightText/HighlightText";
import { css } from "react-emotion";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const contactContainer = css({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "flex-start",
  color: "#727373",
  padding: "1em",
  [mq[0]]: {
    maxWidth: "50%",
  },
  [mq[2]]: {
    maxWidth: "45%"
  },
  [mq[3]]: {
    maxWidth: "40%"
  }
});


const Contact = () => (
  <div className={contactContainer}>
    <HighlightText color="#C5EBF1" text="Contact Me" type="h1" />
    <p>
      You can reach me via email: 
    </p>
    <a href="mailto:tom@tomlewis.tech?Subject=Website%20Project" target="_top">
      tom@tomlewis.tech
    </a>
  </div>
);

export default Contact;
