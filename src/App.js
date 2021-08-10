import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Landing } from "./pages";
import { landing } from "./data/url";

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path={landing} exact component={Landing} />
      </Switch>
    </Router>
  </div>
);

export default App;
