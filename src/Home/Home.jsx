import React from "react";
import { css } from "react-emotion";
import FloatingButton from "../FloatingButton/FloatingButton";

const homeContainer = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
  alignItems: 'center',
  zIndex: -1,
  backgroundColor: "#EEEEEF",
  color: "#727373"
,
h1: {
  backgroundColor: "#C5EBF1",
  marginTop: "0.5em"
}
});

function Home() {
  return (
    <div className={homeContainer}>
      <h1>Hi I'm Tom</h1>
      <h1>A web developer</h1>
      <h1>and software engineer</h1>
      <FloatingButton text="Contact Me"/>
    </div>
  );
}

export default Home;
