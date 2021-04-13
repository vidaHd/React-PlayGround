import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./redux/store/index";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { red } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    secondary: {
      main: "#b9f6ca",
    },
    grey: {
      800: "#000000",
      900: "#121212",
    },
    background: {
      paper: "#102027",
    },
    primary: {
      main: "#102027",
    },
  },
  dark:{
    type: "dark",
    secondary: {
      main: "#b9f6ca",
    },
    grey: {
      800: "#000000",
      900: "#121212",
    },
    background: {
      paper: "#102027",
    },
    primary: {
      main: "#102027",
    },
  }
});

export const themes = createMuiTheme({
  palette: {
    type: "light",
  },
});

const handelTheme = () => {
  alert("h");
};
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
