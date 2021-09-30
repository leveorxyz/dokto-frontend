import * as React from "react";
import {
	ChakraProvider,
	theme,
} from "@chakra-ui/react";
import {
	BrowserRouter as Router,
} from "react-router-dom";

import Routes from "./router";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Router>
			<Routes />
		</Router>
	</ChakraProvider>
);
