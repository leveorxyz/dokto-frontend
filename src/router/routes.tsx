import React, { lazy } from "react";

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
const EmailVerification = lazy(() => import("../pages/EmailVerification"));
const DashboardHome = lazy(() => import("../pages/dashboard"));
const VideoCalls = lazy(() => import("../pages/calls"));

export type RouteType = {
    displayName: string;
    path: string;
    component: React.ReactElement;
    isProtected: boolean;
    allowedRoles?: string[];
    showInNavbar: boolean;
}

const routes: RouteType[] = [
  {
    displayName: "Home",
    path: "/",
    component: <Home />,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "How It Works",
    path: "/how",
    component: <HowItWorks />,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "Available Care",
    path: "/available-care",
    component: <AvailableCare />,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "About Us",
    path: "/about",
    component: <AboutUs />,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "Registration",
    path: "/registration",
    component: <NotImplemented />,
    isProtected: false,
    showInNavbar: false,
  },
  {
    displayName: "Contact Us",
    path: "/contact",
    component: <ContactUs />,
    isProtected: false,
    showInNavbar: false,
  },
  {
    displayName: "Terms & Conditions",
    path: "/terms-and-conditions",
    component: <TermsAndConditions />,
    isProtected: false,
    showInNavbar: false,
  },
  {
    displayName: "Privacy Policy",
    path: "/privacy-policy",
    component: <PrivacyPolicy />,
    isProtected: false,
    showInNavbar: false,
  },
  {
    displayName: "Patient Registration",
    path: "/patient-registration",
    component: <PatientRegistration />,
    isProtected: false,
    showInNavbar: false,
  },
  {
    displayName: "Provider Registration",
    path: "/provider-registration",
    component: <ProviderRegistration />,
    isProtected: false,
    showInNavbar: false,
  },
  {
    displayName: "Email Verification",
    path: "/email-verification",
    component: <EmailVerification />,
    isProtected: false,
    showInNavbar: false,
  },
  {
    displayName: "Video Call",
    path: "/calls",
    component: <VideoCalls />,
    isProtected: true,
    showInNavbar: false,
  },
  {
    displayName: "Home",
    path: "/dashboard",
    component: <DashboardHome />,
    isProtected: true,
    showInNavbar: false,
  },
];

export default routes;
