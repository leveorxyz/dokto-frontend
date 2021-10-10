import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import linkFooter from "./FooterLinks";

export default function FooterIndex() {
  return (
    <Switch>
      {
        linkFooter
          .map((route) => (
            <Route
              key={route.url}
              path={route.url}
              render={() => <route.component />}
              exact
            />
          ))
      }
    </Switch>
  );
}

export * from "./FooterLinks";
