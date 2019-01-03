import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";

export default () => (
  <div>
    <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
      </Switch>
    </main>
  </div>
);
