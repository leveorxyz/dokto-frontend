import {
  ChakraProvider,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
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
import AxiosContextProvider from "./contexts/AxiosContext";

const queryClient = new QueryClient();

function AppContent() {
  return (
    <>
      <NavBar />
      <Routes />
      <Footer />
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
