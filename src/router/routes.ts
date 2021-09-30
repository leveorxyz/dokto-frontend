import Home from "../pages/Home";

type routeType = {
    displayName: string;
    path: string;
    component: () => JSX.Element;
    isProtected: boolean;
		allowerdRoles?: string[];
}

const routes: routeType[] = [
	{
		displayName: "Home",
		path: "/",
		component: Home,
		isProtected: false
	},
];

export default routes;