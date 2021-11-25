import { Suspense } from "react";
import {
  Routes,
  Route,
  Navigate,
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
          .map(({ path, component, isProtected }) => (
            <Route
              key={path}
              path={path}
              element={
                // eslint-disable-next-line no-nested-ternary
                !authState.isLoggedIn && isProtected
                  ? (
                    <Navigate to="/" />
                  )
                  : (
                    authState.isLoggedIn && !isProtected
                      ? (<Navigate to="/dashboard" />)
                      : (
                        <Suspense fallback={<Loading />}>
                          {component}
                        </Suspense>
                      )
                  )
              }
            />
          ))
      }
    </Routes>
  );
}

export * from "./routes";
