import Home from "../pages/Home";
import HowItWorks from "../pages/HowItWorks";
import NotImplemented from "../components/NotImplemented";
import AboutUs from "../pages/AboutUs";

type routeType = {
    displayName: string;
    path: string;
    component: () => JSX.Element;
    isProtected: boolean;
    allowedRoles?: string[];
    showInNavbar: boolean;
}

const routes: routeType[] = [
  {
    displayName: "Home",
    path: "/",
    component: Home,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "How it works",
    path: "/how",
    component: HowItWorks,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "Doctors",
    path: "/doctors",
    component: NotImplemented,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "Clinics",
    path: "/clinics",
    component: NotImplemented,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "Pharmacies",
    path: "/pharmacies",
    component: NotImplemented,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "Registration",
    path: "/registration",
    component: NotImplemented,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "About Us",
    path: "/about",
    component: AboutUs,
    isProtected: false,
    showInNavbar: false,
  },
];

export default routes;
