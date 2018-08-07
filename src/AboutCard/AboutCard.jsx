import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FlamelinkApp from "../FlamelinkApp/FlamelinkApp";
import { ClipLoader } from "react-spinners";

const styles = {
  spinnerContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "5em"
  },
  cropContainer: {
    display: "flex",
    alignItems: "center",
    width: 100,
    height: 100,
    overflow: "hidden",
    borderRadius: "50%",
    img: {
      display: "inline",
      margin: "0 auto",
      height: "100%",
      width: "auto"
    }
  },
  skillContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "2em",
    paddingBottom: "2em"
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

  componentDidMount() {
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
      <div className={classes.skillContainer}>
        <div className={classes.cropContainer}>
          <img src={this.state.image} />
        </div>
        <Typography variant="title" style={{paddingBottom: "1em"}}>{this.props.skillTitle}</Typography>
        <Typography variant="subheading">{this.props.skillDescription}</Typography>
      </div>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProjectCard);
