import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Product from "./components/admin/Product";
import Dashboard from "./components/admin/Dashboard";
import Login from "./components/admin/Login";
import NotFound from "./components/NotFound";
import Order from "./components/admin/Order";
import tableApi from "./components/admin/TableApi";
import DataProduct from "./components/user/DataProducts";
import CommentProduct from "./components/user/CommentProduct";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/product" component={Product} />
        <Route path="/order" component={Order} />
        <Route path="/Languege" component={tableApi} />
        <Route path="/DataProduct" component={DataProduct} />
        <Route path="/ShowProduct" component={CommentProduct} />

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
