import React from "react";
import { css } from "react-emotion";
import ContactButton from "../ContactButon/ContactButton";
import HighlightText from "../HighlightText/HighlightText";

const homeContainer = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  flex: 1,
  padding: "1em",
  alignItems: "center",
  color: "#727373",
  textAlign: "center"
});

const section1 = css({});

const section2 = css({
  marginTop: "3em"
});

const section3 = css({
  marginTop: "1em"
});

class Home extends React.Component {

  render() {
    return (
      <div className={homeContainer}>
        <div className={section1}>
          <HighlightText color="#C5EBF1" text="Hi I'm Tom." type="h1" />
        </div>
        <div className={section2}>
          <HighlightText color="#C5EBF1" text="A web developer &" type="h1" />
        </div>
        <div className={section3}>
          <HighlightText color="#C5EBF1" text="software engineer." type="h1" />
        </div>
        <ContactButton text="Contact Me" />
      </div>
    );
  }
}

export default Home;
