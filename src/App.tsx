import { useMemo } from "react";
import {
  ChakraProvider,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import "./app.scss";
import "swiper/swiper.scss";
import "swiper/swiper-vars.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import Routes from "./router";
import RoutesData from "./router/routes";
import NavBar from "./components/nav/Bar";
import SideBarContainer from "./components/nav/Sidebar";
import Footer from "./components/common/footer/Footer";
import theme from "./components/ExtendedTheme";
import authAtom from "./atoms/auth.atom";
import AxiosContextProvider from "./contexts/AxiosContext";

const queryClient = new QueryClient();

function AppContent() {
  const { pathname: currentURL } = useLocation();
  const authState = useRecoilValue(authAtom);

  const shouldRenderSidebar = useMemo(() => {
    const currentRoute = RoutesData.find((route) => {
      if (route.path.includes(":")) {
        return currentURL.includes(route.path.split(":")[0]);
      }
      return route.path === currentURL;
    });
    return currentRoute?.isProtected;
  }, [currentURL]);

  return (
    <>
      {!authState.isLoggedIn && <NavBar />}
      {!authState.isLoggedIn && <Routes />}
      {!authState.isLoggedIn && <Footer />}

      {authState.isLoggedIn && (
        shouldRenderSidebar
          ? (
            <SideBarContainer>
              <Routes />
            </SideBarContainer>
          )
          : (
            <>
              <NavBar />
              <Routes />
              <Footer />
            </>
          )
      )}
    </>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Router>
          <AxiosContextProvider>
            <QueryClientProvider client={queryClient}>

              <AppContent />

            </QueryClientProvider>
          </AxiosContextProvider>
        </Router>
      </ChakraProvider>
    </RecoilRoot>
  );
}
