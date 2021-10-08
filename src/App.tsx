import * as React from "react";
import {
  ChakraProvider,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import "./app.scss";
import "swiper/swiper.scss";
import "swiper/swiper-vars.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import Routes from "./router";
import NavBar from "./components/nav/Bar";
import theme from "./components/ExtendedTheme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </ChakraProvider>
  );
}
