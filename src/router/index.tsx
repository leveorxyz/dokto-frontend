import { Suspense } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { useRecoilValue } from "recoil";

import routes from "./routes";
import authAtom from "../atoms/auth.atom";
import Loading from "../components/common/fallback/LoadingPage";

export default function CustomRoutes() {
  const authState = useRecoilValue(authAtom);

  return (
    <Routes>
      {
        routes
          .filter((route) => (authState.isLoggedIn ? true : !route.isProtected))
          .map(({ path, component }) => (
            <Route
              key={path}
              path={path}
              element={
              (
                <Suspense fallback={<Loading />}>
                  {component}
                </Suspense>
              )
            }
            />
          ))
      }
    </Routes>
  );
}

export * from "./routes";
