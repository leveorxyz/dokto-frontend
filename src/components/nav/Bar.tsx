import React from "react";

import routes from "../../router/routes";
import NavItem from "./NavItem";

export default function Bar() {
	return (
		<>
			{routes.map((route) => <NavItem 
				key={route.path} 
				title={route.displayName}
				href={route.path}
			/>)}
		</>);
}