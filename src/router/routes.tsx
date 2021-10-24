import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const HowItWorks = lazy(() => import("../pages/HowItWorks"));
const NotImplemented = lazy(() => import("../components/NotImplemented"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const AvailableCare = lazy(() => import("../pages/AvailableCare"));

type routeType = {
    displayName: string;
    path: string;
    component: React.ReactNode;
    isProtected: boolean;
    allowedRoles?: string[];
    showInNavbar: boolean;
}

const LazyLoader = ({ children }: {children: React.ReactChild}) => (
  <Suspense fallback={<div>loading...</div>}>
    {children}
  </Suspense>
);

const routes: routeType[] = [
  {
    displayName: "Home",
    path: "/",
    component: <LazyLoader><Home /></LazyLoader>,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "How it works",
    path: "/how",
    component: <LazyLoader><HowItWorks /></LazyLoader>,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "Available Care",
    path: "/available-care",
    component: <LazyLoader><AvailableCare /></LazyLoader>,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "About Us",
    path: "/about",
    component: <LazyLoader><AboutUs /></LazyLoader>,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "Registration",
    path: "/registration",
    component: <LazyLoader><NotImplemented /></LazyLoader>,
    isProtected: false,
    showInNavbar: false,
  },
  {
    displayName: "Contact Us",
    path: "/contact",
    component: <LazyLoader><ContactUs /></LazyLoader>,
    isProtected: false,
    showInNavbar: false,
  },
];

export default routes;
