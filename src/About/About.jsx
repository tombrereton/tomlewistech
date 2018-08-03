import React from "react";
import HighlightText from "../HighlightText/HighlightText";
import { css } from "react-emotion";

const aboutContainer = css({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  alignItems: "flex-start",
  padding: "1em",
  color: "#727373"
});

const About = () => (
  <div className={aboutContainer}>
    <HighlightText color="#C5EBF1" text="About me" type="h1" />
    <p>Coming soon.</p>
  </div>
);

export default About;
