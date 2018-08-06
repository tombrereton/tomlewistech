import React from "react";
import { css } from "react-emotion";
import FloatingButton from "../FloatingButton/FloatingButton";
import HighlightText from "../HighlightText/HighlightText";
import FlamelinkApp from "../FlamelinkApp/FlamelinkApp";

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
  constructor(props) {
    super(props);
    this.state = {
      section1: "",
      section2: "",
      section3: "",
      section4: ""
    };
  }

  componentDidMount() {
    FlamelinkApp.content.get("homePage").then(homepage => {
      this.setState({ section1: homepage.section1 });
      this.setState({ section2: homepage.section2 });
      this.setState({ section3: homepage.section3 });
    });
  }

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
        <FloatingButton text="Contact Me" />
      </div>
    );
  }
}

export default Home;
