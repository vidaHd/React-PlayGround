import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Order from "./components/Order";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/product" component={Product} />
        <Route path="/order" component={Order} />

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
