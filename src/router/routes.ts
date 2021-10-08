import Home from "../pages/Home";
import NotImplemented from "../components/NotImplemented";
import AboutUs from "../pages/AboutUs";

type routeType = {
    displayName: string;
    path: string;
    component: () => JSX.Element;
    isProtected: boolean;
    allowedRoles?: string[];
}

const routes: routeType[] = [
  {
    displayName: "Home",
    path: "/",
    component: Home,
    isProtected: false,
  },
  {
    displayName: "How it works",
    path: "/how",
    component: NotImplemented,
    isProtected: false,
  },
  {
    displayName: "Doctors",
    path: "/doctors",
    component: AboutUs,
    isProtected: false,
  },
  {
    displayName: "Clinics",
    path: "/clinics",
    component: NotImplemented,
    isProtected: false,
  },
  {
    displayName: "Pharmacies",
    path: "/pharmacies",
    component: NotImplemented,
    isProtected: false,
  },
  {
    displayName: "Registration",
    path: "/registration",
    component: NotImplemented,
    isProtected: false,
  },
];

export default routes;
