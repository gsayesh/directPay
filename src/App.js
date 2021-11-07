import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./cart/cart";
import Checkout from "./checkout/checkout";
import Login from "./login/login";
import Auth from "./auth/auth";
import Checkoutt from "./checkout/checkout2";
import Thanks from "./thanks/thanks";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Cart />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/auth">
          <Auth />
        </Route>
        <Route exact path="/checkoutt">
          <Checkoutt />
        </Route>
        <Route exact path="/thanks">
          <Thanks />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
