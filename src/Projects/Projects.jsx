import React from "react";
import HighlightText from "../HighlightText/HighlightText";
import { css } from "react-emotion";

const projectContainer = css({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  padding: "1em",
  alignItems: "flex-start",
  color: "#727373"
});

const Projects = () => (
  <div className={projectContainer}>
    <HighlightText color="#C5EBF1" text="Projects" type="h1" />
    <p>Coming soon.</p>
  </div>
);

export default Projects;
