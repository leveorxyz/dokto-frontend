import {
  ChakraProvider,
} from "@chakra-ui/react";
import {
  HashRouter as Router,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./app.scss";
import "swiper/swiper.scss";
import "swiper/swiper-vars.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import Routes from "./router";
import NavBar from "./components/nav/Bar";
import theme from "./components/ExtendedTheme";
import AxiosContextProvider from "./contexts/AxiosContext";

function AppContent() {
  return (
    <AxiosContextProvider>
      <NavBar />
      <Routes />
    </AxiosContextProvider>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Router>
          <AppContent />
        </Router>
      </ChakraProvider>
    </RecoilRoot>
  );
}
