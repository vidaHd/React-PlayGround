import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Order from "./components/Order";
import "./App.css";
import React, { useEffect, useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { theme } from "./index";
import Checkbox from "@material-ui/core/Checkbox";

function App() {
  // const [darkMode, setDarkMode] = useState(false);

  // const theme = createMuiTheme({
  //   palette: {
  //     type: darkMode ? "dark" : "light",
  //   },
  // });
  return (
    <ThemeProvider theme={theme}>
      {/* <Checkbox checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> */}
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/product" component={Product} />
          <Route path="/order" component={Order} />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
