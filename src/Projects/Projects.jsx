import React from "react";
import HighlightText from "../HighlightText/HighlightText";
import { Grid, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ProjectCard from "../ProjectCard/ProjectCard";
import { NavLink } from "react-router-dom";
import FlamelinkApp from "../FlamelinkApp/FlamelinkApp";

const styles = {
  projectContainer: {
    padding: "1em",
    margin: 0,
    width: "100%",
  },
  title: {
    paddingBottom: "2em"
  },
  gridItem: {
    width: "100%"
  }
};

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    FlamelinkApp.content
      .get("project")
      .then(p => {
        console.log(p)
        for (var property in p) {
          let project = p[property];
          this.setState({ projects: this.state.projects.concat([project]) });
        }
      })
      .catch(e => console.log("Error getting projects:", e));
  }

  render() {
    const { classes } = this.props;
    let projects = this.state.projects.map((project, index) => {
      return (
        <Grid item xs={12} className={classes.gridItem}>
          <NavLink exact to={"/projects/project/" + project.slug}>
            <ProjectCard
              key={index}
              projectTitle={project.projectTitle}
              tags={project.tags}
              summary={project.summary}
              image={project.images[0]}
            />
          </NavLink>
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
          <HighlightText color="#C5EBF1" text="Projects" type="h1" />
        </div>
        {projects}
      </Grid>
    );
  }
}

export default withStyles(styles)(Projects);
