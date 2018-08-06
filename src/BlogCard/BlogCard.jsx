import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import FlamelinkApp from "../FlamelinkApp/FlamelinkApp";
import { ClipLoader } from "react-spinners";
import { CardHeader } from "@material-ui/core";

const styles = {
  card: {},
  media: {
    height: 0,
    paddingTop: "51%" // 16:9
  },
  cardSubheading: {
    paddingBottom: "1em"
  },
  cardTitle: {
    fontWeight: 600
  },
  spinnerContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "5em"
  },
  cardHeaderDark:{
    // backgroundColor: "#727373",
    // color: "#eeeeef !important"
  }
};

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      image: ""
    };
  }

  componentWillMount() {
    FlamelinkApp.storage
      .getURL(this.props.image)
      .then(image => {
        this.setState({ image: image });
        this.setState({ loading: false });
      })
      .catch(e => console.log("Error getting project image:", e));
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
      <div>
        <Card className={classes.card}>
          <CardHeader className={classes.cardHeaderDark} title={this.props.postTitle} subheader={"Tags: " + this.props.tags} />
          <CardMedia className={classes.media} image={this.state.image} title="Project Image" />
          <CardContent>
            <Typography className={classes.cardSubheading} caption="p" />
            <Typography component="p">{this.props.summary}</Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectCard);
