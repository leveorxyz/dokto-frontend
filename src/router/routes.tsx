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
const Profile = lazy(() => import("../pages/dashboard/Profile"));
const ProfileSettings = lazy(() => import("../pages/dashboard/ProfileSettings"));
const AccountSettings = lazy(() => import("../pages/dashboard/AccountSettings"));
const SpecialitiesServices = lazy(() => import("../pages/dashboard/SpecialitiesServices"));
const VideoCalls = lazy(() => import("../pages/calls"));
const Logout = lazy(() => import("../pages/Logout"));
const Calendar = lazy(() => import("../pages/Calendar"));
const Patients = lazy(() => import("../pages/dashboard/Patients"));
const Encounters = lazy(() => import("../pages/dashboard/Encounters"));

export type RouteType = {
    displayName: string;
    path: string;
    component: React.ReactElement;
    isProtected: boolean;
    allowedRoles?: string[];
    showInNavbar: boolean;
    showInDashboard?: boolean;
    showInSideLink?: boolean;
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
    displayName: "Dashboard",
    path: "/dashboard",
    component: <DashboardHome />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: true,
    showInSideLink: true,
  },
  {
    displayName: "Profile",
    path: "/profile-settings/profile",
    component: <Profile />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: true,
    showInSideLink: false,
  },
  {
    displayName: "Profile Settings",
    path: "/profile-settings",
    component: <ProfileSettings />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: true,
    showInSideLink: true,
  },
  {
    displayName: "Specialities & Services",
    path: "/specialities-services",
    component: <SpecialitiesServices />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: true,
    showInSideLink: true,
  },
  {
    displayName: "Appointments",
    path: "/appointments",
    component: <Calendar />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: true,
    showInSideLink: true,
  },
  {
    displayName: "Account Settings",
    path: "/account-settings",
    component: <AccountSettings />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: true,
    showInSideLink: true,
  },
  {
    displayName: "Patients",
    path: "/patients",
    component: <Patients />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: true,
  },
  {
    displayName: "Encounters",
    path: "/patients/encounters",
    component: <Encounters />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: false,
  },
  {
    displayName: "Logout",
    path: "/logout",
    component: <Logout />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: true,
    showInSideLink: true,
  },
];

export default routes;
