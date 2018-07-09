import React from "react";
import { css } from "react-emotion";

const homeContainer = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
  alignItems: 'center',
  zIndex: -1,
  backgroundColor: "#EEEEEF"
});

function Home() {
  return (
    <div className={homeContainer}>
      <h1>Hi I'm Tom</h1>
      <h1>I'm a web developer</h1>
      <h1>and software engineer</h1>
    </div>
  );
}

export default Home;
