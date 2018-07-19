import flamelink from "flamelink";

const FlamelinkApp = flamelink({
  apiKey: process.env.REACT_APP_APIKEY, // required
  authDomain: process.env.REACT_APP_AUTHDOMAIN, // required
  databaseURL: process.env.REACT_APP_DATABASEURL, // required
  projectId: process.env.REACT_APP_PROJECTID, // required
  storageBucket: process.env.REACT_APP_STORAGEBUCKET, // required
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID // optional
});

export default FlamelinkApp;
