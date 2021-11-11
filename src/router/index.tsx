import {
  Switch,
  Route,
} from "react-router-dom";
import { useRecoilValue } from "recoil";

import routes from "./routes";
import authAtom from "../atoms/auth.atom";

export default function Routes() {
  const authState = useRecoilValue(authAtom);

  return (
    <Switch>
      {
        routes
          .filter((route) => (authState.isLoggedIn ? true : !route.isProtected))
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

export * from "./routes";
