import React from "react";
import "./Global.css";
import RouteManager from "./RouteManager/RouteManager";
import { css } from "emotion";
import WebFont from "webfontloader";
import Header from "./Header/Header";
import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
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
  <div className={app}>
    <Header />
    <RouteManager />
  </div>
);

const app = css({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

export default App;
