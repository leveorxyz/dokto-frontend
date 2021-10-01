import React from "react";
import {
	Switch,
	Route,
} from "react-router-dom";

import routes from "./routes";

export default function Routes() {
	return (
		<Switch>
			{
				routes
					.map((route) => <Route 
						key={route.path}
						path={route.path}
						render={() => <route.component/>}
						exact
					/>)
			}
		</Switch>
	);
}

export * from "./routes";