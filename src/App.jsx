import React from "react";
import "./Global.css";
import RouteManager from "./RouteManager/RouteManager";
import { css } from "emotion";
import WebFont from "webfontloader";
import Header from "./Header/Header";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faLinkedin, faEnvelope)

// All the following keys are optional.
// We try our best to provide a great default value.
const THEME = createMuiTheme({
  typography: {
    fontFamily: '"Quicksand", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
  palette: {
    primary: {
      main: "#03A9F4",
      dark: "#0288D1",
      light: "#B3E5FC"
    },
    secondary: {
      main: "#FF5252"
    },
    text: {
      primary: "#212121",
      secondary: "#757575"
    },
    divider: "#BDBDBD",
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

WebFont.load({
  google: {
    families: ["Quicksand:300", "sans-serif"]
  }
});

const App = () => (
  <MuiThemeProvider theme={THEME}>
    <div className={app}>
      <Header />
      <RouteManager />
    </div>
  </MuiThemeProvider>
);

const app = css({
  display: "flex",
  flexDirection: "column",
  flex: 1
});

export default App;
