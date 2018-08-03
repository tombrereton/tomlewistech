import React from "react";
import HighlightText from "../HighlightText/HighlightText";
import { css } from "react-emotion";

const blogContainer = css({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  padding: "1em",
  alignItems: "flex-start",
  color: "#727373"
});

const Blog = () => (
  <div className={blogContainer}>
    <HighlightText color="#C5EBF1" text="Blog" type="h1" />
    <p>Coming soon.</p>
  </div>
);

export default Blog;
