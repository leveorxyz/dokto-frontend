import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import bottomFooter from "./BottomLinks";

export default function BottomIndex() {
  return (
    <Switch>
      {
        bottomFooter
          .map((route) => (
            <Route
              key={route.path}
              path={route.path}
              render={() => route.component}
              exact
            />
          ))
      }
    </Switch>
  );
}

export * from "./BottomLinks";
