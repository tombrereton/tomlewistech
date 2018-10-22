import React from "react";
import { NavLink } from "react-router-dom";
import ContactButton from "../ContactButon/ContactButton";
import HighlightText from "../HighlightText/HighlightText";
import HomeCard from "../HomeCard/HomeCard";
import { withStyles } from "@material-ui/core/styles";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import FaceIcon from "@material-ui/icons/Face";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

const styles = {
  outerContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center"
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100%",
    padding: "1em",
    alignItems: "center",
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
    <div className={classes.outerContainer}>
      <div className={classes.mainContainer}>
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
      <NavLink exact to="projects">
        <HomeCard menuItemName="Projects" background="#C5EBF1">
          <PermMediaIcon fontSize='inherit' />
        </HomeCard>
      </NavLink>
      <NavLink exact to="blog">
        <HomeCard menuItemName="Blog" swap={false} >
          <LibraryBooksIcon fontSize='inherit' />
        </HomeCard>
      </NavLink>
      <NavLink exact to="about">
        <HomeCard menuItemName="About Me" background="#C5EBF1">
          <FaceIcon fontSize='inherit' />
        </HomeCard>
      </NavLink>
      <NavLink exact to="contact">
        <HomeCard menuItemName="Hire Me" swap={false} >
          <QuestionAnswerIcon fontSize='inherit' />
        </HomeCard>
      </NavLink>
      <HomeCard background="#eeeeef">
      </HomeCard>
    </div>
  );
}

export default withStyles(styles)(Home);
