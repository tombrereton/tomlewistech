import React from "react";
import HighlightText from "../HighlightText/HighlightText";
import { Grid, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ProjectCard from "../ProjectCard/ProjectCard";

const styles = {
  projectContainer: {
    padding: "1em",
    margin: 0,
    width: '100%'
  },
  title: {
    paddingBottom: "2em"
  }

};

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
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
        <HighlightText color="#C5EBF1" text="Projects" type="h1" />
      </div>

        <Grid item xs={12}>
          <ProjectCard />
        </Grid>
        <Grid item xs={12}>
          <ProjectCard />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Projects);
