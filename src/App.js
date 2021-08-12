import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Landing, Location, Home, Orders, Cart, Profile } from "./pages";
import { landing, location, home, orders, cart, profile } from "./data/url";

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path={landing} exact component={Landing} />
        <Route path={location} exact component={Location} />
        <Route path={home} exact component={Home} />
        <Route path={orders} exact component={Orders} />
        <Route path={cart} exact component={Cart} />
        <Route path={profile} exact component={Profile} />
      </Switch>
    </Router>
  </div>
);

export default App;
