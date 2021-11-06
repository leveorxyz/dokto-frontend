import React, { Suspense, lazy } from "react";

import Loading from "../components/common/fallback/LoadingPage";

const Home = lazy(() => import("../pages/Home"));
const HowItWorks = lazy(() => import("../pages/HowItWorks"));
const NotImplemented = lazy(() => import("../components/NotImplemented"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const AvailableCare = lazy(() => import("../pages/AvailableCare"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const ProviderRegistration = lazy(() => import("../pages/registration/Provider"));
const PatientRegistration = lazy(() => import("../pages/registration/Patient"));

type routeType = {
    displayName: string;
    path: string;
    component: React.ReactNode;
    isProtected: boolean;
    allowedRoles?: string[];
    showInNavbar: boolean;
}

const LazyLoader = ({ children }: {children: React.ReactChild}) => (
  <Suspense fallback={<Loading />}>
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
  {
    displayName: "Terms & Conditions",
    path: "/terms-and-conditions",
    component: <LazyLoader><TermsAndConditions /></LazyLoader>,
    isProtected: false,
    showInNavbar: false,
  },
  {
    displayName: "Privacy Policy",
    path: "/privacy-policy",
    component: <LazyLoader><PrivacyPolicy /></LazyLoader>,
    isProtected: false,
    showInNavbar: false,
  },
  {
    displayName: "Patient Registration",
    path: "/patient-registration",
    component: <LazyLoader><PatientRegistration /></LazyLoader>,
    isProtected: false,
    showInNavbar: false,
  },
  {
    displayName: "Provider Registration",
    path: "/provider-registration",
    component: <LazyLoader><ProviderRegistration /></LazyLoader>,
    isProtected: false,
    showInNavbar: false,
  },
  {
    displayName: "Video Call",
    path: "/calls",
    component: <LazyLoader><NotImplemented /></LazyLoader>,
    isProtected: true,
    showInNavbar: false,
  },
];

export default routes;
