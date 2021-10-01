import * as React from "react";
import {
	ChakraProvider,
	theme,
} from "@chakra-ui/react";
import {
	BrowserRouter as Router,
} from "react-router-dom";

import Routes from "./router";
import NavBar from "./components/nav/Bar";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Router>
			<NavBar />
			<Routes />
		</Router>
	</ChakraProvider>
);
