import React from "react";
import HighlightText from "../HighlightText/HighlightText";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AboutCard from "../AboutCard/AboutCard";
import FlamelinkApp from "../FlamelinkApp/FlamelinkApp";
import portraitPhoto from "./portrait.png";

const styles = {
  projectContainer: {
    padding: "1em",
    margin: 0,
    width: "100%"
  },
  title: {
    paddingBottom: "2em"
  },
  gridItem: {
    width: "100%"
  },
  portraitContainer: {
    maxWidth: 300,
    paddingTop: "2em",
    paddingBottom: "2em"
  }
};

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    };
  }

  componentWillMount() {
    FlamelinkApp.content
      .get("skill")
      .then(s => {
        for (var property in s) {
          let skill = s[property];
          this.setState({ skills: this.state.skills.concat([skill]) });
        }
      })
      .catch(e => console.log("Error getting projects:", e));
  }

  render() {
    const { classes } = this.props;
    let skills = this.state.skills.map(skill => {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.gridItem} key={skill.id}>
          <AboutCard
            skillTitle={skill.skillTitle}
            skillDescription={skill.skillDescription}
            image={skill.images[0]}
          />
        </Grid>
      );
    });
    return (
      <Grid
        container
        spacing={16}
        direction="column"
        justify="flex-start"
        alignItems="center"
        wrap="nowrap"
        className={classes.projectContainer}
      >
        <div className={classes.title}>
          <HighlightText color="#C5EBF1" text="About Me" type="h1" />
        </div>
        <img
          className={classes.portraitContainer}
          src={portraitPhoto}
          alt={"A portrait of Tom Lewis"}
        />
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
          <Typography style={{ paddingBottom: "1em" }} variant="subheading">
            I'm a software engineer who loves design and building things. I primarily use .NET Core,
            React, and Python to develop and Microsoft Azure for cloud services.{" "}
          </Typography>
          <Typography variant="subheading">
            I currently work at ASOS in one of the back-end teams using .NET Framework and Microsoft
            Azure. We optimise our back-end to handle high traffic whilst still minimising costs
            through efficient architecture design and technologies such as; AKS, Docker, .NET Core,
            Team City, and Octopus. Outside of work, I enjoy building front-end web apps with React,
            CSS-in-JS, and Google Firebase such as this website.
          </Typography>
        </Grid>
        {skills}
      </Grid>
    );
  }
}

export default withStyles(styles)(About);
