import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../screens/App";
import Menu from "../screens/Menu";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/Menu" component={Menu} />
    </Switch>
  </BrowserRouter>
);
