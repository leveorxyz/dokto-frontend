import {
  ChakraProvider,
} from "@chakra-ui/react";
import {
  HashRouter as Router,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import "./app.scss";
import "swiper/swiper.scss";
import "swiper/swiper-vars.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import Routes from "./router";
import NavBar from "./components/nav/Bar";
import Footer from "./components/common/footer/Footer";
import theme from "./components/ExtendedTheme";
import AxiosContextProvider from "./contexts/AxiosContext";

const queryClient = new QueryClient();

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ababab",
    },
    secondary: purple,
  },
});

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
      <ThemeProvider theme={muiTheme}>
        <ChakraProvider theme={theme}>
          <Router>
            <AxiosContextProvider>
              <QueryClientProvider client={queryClient}>

                <AppContent />

              </QueryClientProvider>
            </AxiosContextProvider>
          </Router>
        </ChakraProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}
