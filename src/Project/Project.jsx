import React from "react";
import { ClipLoader } from "react-spinners";
import { withStyles } from "@material-ui/core/styles";
import FlamelinkApp from "../FlamelinkApp/FlamelinkApp";

const styles = {
  spinnerContainer:{
      display: 'flex',
      justifyContent: 'center',
      padding: "5em"
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

  componentWillMount() {
    FlamelinkApp.content
      .getByField("project", "slug", "test-project")
      .then(p => {
        for (const prop in p) {
          console.log(prop);
          this.setState({ project: p[prop] });
        }
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
    return <div className="postFullContainer">
    <h1>{this.state.project['projectTitle']}</h1>
    </div>;
  }
}

export default withStyles(styles)(Project);
