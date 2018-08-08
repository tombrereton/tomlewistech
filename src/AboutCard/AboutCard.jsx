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
    justifyContent: "center",
    width: 100,
    height: 100,
    overflow: "hidden",
    borderRadius: "50%",
    "& img": {
      margin: "0 auto",
      height: "100%",
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

class AboutCard extends React.Component {
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
          <img src={this.state.image} alt={"Image of" + this.props.skillTitle} />
        </div>
        <Typography variant="title" style={{ paddingTop: "0.5em", paddingBottom: "0.3em" }}>{this.props.skillTitle}</Typography>
        <Typography variant="subheading">{this.props.skillDescription}</Typography>
      </div>
    );
  }
}

AboutCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutCard);
