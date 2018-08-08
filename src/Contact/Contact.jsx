import React from "react";
import HighlightText from "../HighlightText/HighlightText";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ContactExternalButton from "../ContactExternalButton/ContactExternalButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    display: "flex",
    justifyContent: "center",
    width: "100%",
  }
};

class Contact extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        spacing={40}
        direction="column"
        justify="center"
        alignItems="center"
        wrap="nowrap"
        className={classes.projectContainer}
      >
        <div className={classes.title}>
          <HighlightText color="#C5EBF1" text="Contact Me" type="h1" />
        </div>
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
          <ContactExternalButton externalUrl="mailto:tom@tomlewis.tech" text="Email">
            <FontAwesomeIcon icon={['fa', 'envelope']} />
          </ContactExternalButton>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
          <ContactExternalButton externalUrl="https://github.com/tombrereton" text="Github">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </ContactExternalButton>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
          <ContactExternalButton externalUrl="https://www.linkedin.com/in/tbrereton/" text="Linkedin">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </ContactExternalButton>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Contact);
