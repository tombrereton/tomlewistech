import React from "react";
import ContactButton from "../ContactButon/ContactButton";
import HighlightText from "../HighlightText/HighlightText";
import HomeCard from "../HomeCard/HomeCard";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    padding: "1em",
    alignItems: "center",
    color: "#727373",
    textAlign: "center"
  },
  section1: {
  },
  section2: {
    marginTop: "3em"
  },
  section3: {
    marginTop: "1em"
  },
}

function Home(props) {
  const { classes } = props;
  return (
    <div className={classes.homeContainer}>
      <div className={classes.section1}>
        <HighlightText color="#C5EBF1" text="Hi I'm Tom." type="h1" />
      </div>
      <div className={classes.section2}>
        <HighlightText color="#C5EBF1" text="A web developer &" type="h1" />
      </div>
      <div className={classes.section3}>
        <HighlightText color="#C5EBF1" text="software engineer." type="h1" />
      </div>
      <ContactButton text="Contact Me" />
    </div>
  );
}

export default withStyles(styles)(Home);
