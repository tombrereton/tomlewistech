import React from "react";
import HighlightText from "../HighlightText/HighlightText";
import { css } from "react-emotion";

const contactContainer = css({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "flex-start",
  color: "#727373",
  padding: "1em"
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
