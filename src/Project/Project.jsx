import React from "react";
import Disqus from "disqus-react";
import { ClipLoader } from "react-spinners";
import { withStyles } from "@material-ui/core/styles";
import FlamelinkApp from "../FlamelinkApp/FlamelinkApp";
import { Paper, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import HighlightText from "../HighlightText/HighlightText";
import Parser from 'html-react-parser';
import MD from "../JS/MarkdownIt";

const styles = {
  spinnerContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "5em"
  },
  projectContainer: {
    padding: "1em",
    margin: 0,
    width: "100%"
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "1em",
    minHeight: 100
  },
  gridItem: {
    width: "100%"
  },
  paperItem: {
    padding: "1em"
  }
};

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      project: null
    };
  }

  configureDisqus(slug) {
    const canonicalUrl = "https://tomlewis.tech/projects/project/" + slug;
    this.setState({ disqusShortname: "tomlewis-tech" });
    const disqusConfig = {
      url: canonicalUrl,
      identifier: this.state.project.id,
      title: this.state.project["projectTitle"]
    };
    this.setState({ disqusConfig: disqusConfig });
  }

  componentDidMount() {
    let slug = this.props.match.params.slug;
    FlamelinkApp.content
      .getByField("project", "slug", slug)
      .then(p => {
        for (const prop in p) {
          this.setState({ project: p[prop] });
        }
        this.configureDisqus(slug);
        this.setState({ loading: false });
      })
      .catch(e => console.log("Error getting project:", e));
  }

  render() {
    const { classes } = this.props;
    if (this.state.loading) {
      return (
        <div className={classes.spinnerContainer}>
          <ClipLoader color={"#474973"} loading={this.state.loading} />
        </div>
      );
    }
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        wrap="nowrap"
        className={classes.projectContainer}
      >
        <Grid item xs={12} sm={8} md={6} className={classes.title}>
          <HighlightText color="#C5EBF1" text={this.state.project["projectTitle"]} type="h1" />
          <Typography variant="subheading">{this.state.project["author"]}</Typography>
          <Typography variant="subheading">Tags: {this.state.project["tags"]}</Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6} className={classes.title}>
          <Typography variant="subheading">
            Published: {new Date(this.state.project["datePublished"]).toDateString()}, Last
            Modified: {new Date(this.state.project["dateLastModified"]).toDateString()}
          </Typography>
          <Disqus.CommentCount
            shortname={this.state.disqusShortname}
            config={this.state.disqusConfig}
          >
            Comments
          </Disqus.CommentCount>
        </Grid>
        <Grid item xs={12} sm={8} md={6} className={classes.gridItem}>
          <Paper className={classes.paperItem}>
            {Parser(MD.render(this.state.project["content"]))}
          </Paper>
          <Disqus.DiscussionEmbed
            shortname={this.state.disqusShortname}
            config={this.state.disqusConfig}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Project);
