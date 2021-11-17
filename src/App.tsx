import {
  ChakraProvider,
} from "@chakra-ui/react";
import {
  HashRouter as Router,
} from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import "./app.scss";
import "swiper/swiper.scss";
import "swiper/swiper-vars.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import Routes from "./router";
import NavBar from "./components/nav/Bar";
import Footer from "./components/common/footer/Footer";
import theme from "./components/ExtendedTheme";
import authAtom from "./atoms/auth.atom";
import AxiosContextProvider from "./contexts/AxiosContext";

const queryClient = new QueryClient();

function AppContent() {
  const authState = useRecoilValue(authAtom);
  return (
    <>
      {!authState.isLoggedIn && <NavBar />}
      <Routes />
      {!authState.isLoggedIn && <Footer />}
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
