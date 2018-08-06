import React from "react";
import HighlightText from "../HighlightText/HighlightText";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import BlogCard from "../BlogCard/BlogCard";
import { NavLink } from "react-router-dom";
import FlamelinkApp from "../FlamelinkApp/FlamelinkApp";

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
  }
};

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    FlamelinkApp.content
      .get("post")
      .then(p => {
        for (var property in p) {
          let post = p[property];
          this.setState({ posts: this.state.posts.concat([post]) });
        }
      })
      .catch(e => console.log("Error getting projects:", e));
  }

  render() {
    const { classes } = this.props;
    let projects = this.state.posts.map((project, index) => {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
          <NavLink exact to={"/blog/post/" + project.slug}>
            <BlogCard
              key={index}
              postTitle={project.postTitle}
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
          <HighlightText color="#C5EBF1" text="Blog" type="h1" />
        </div>
        {projects}
      </Grid>
    );
  }
}

export default withStyles(styles)(Blog);
