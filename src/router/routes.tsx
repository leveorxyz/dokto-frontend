import React, { lazy } from "react";

import CalendarIcon from "../static/calendar.svg";
import SettingsIcon from "../static/settings.svg";
import SpecialtiesIcon from "../static/specialties.svg";
import PatientlistIcon from "../static/Patientlist.svg";
import LogOutIcon from "../static/account_logout.svg";
import ChatIcon from "../static/messages.svg";
import AccountSettingsIcon from "../static/supervised_user_circle.svg";
import AppointmentBookingIcon from "../static/Schedulesettings.svg";
import PayoutIcon from "../static/Payout.svg";
import InvoiceIcon from "../static/invoice.svg";

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
const SpecialtiesServices = lazy(() => import("../pages/dashboard/SpecialtiesServices"));
const VideoCalls = lazy(() => import("../pages/calls"));
const Logout = lazy(() => import("../pages/Logout"));
const Calendar = lazy(() => import("../pages/Calendar"));
const Patients = lazy(() => import("../pages/dashboard/Patients"));
const Encounters = lazy(() => import("../pages/dashboard/ehr/Encounters"));
const AssessmentAndDiagnosis = lazy(() => import("../pages/dashboard/ehr/Assessment&Diagnosis"));
const PlanOfCare = lazy(() => import("../pages/dashboard/ehr/PlanOfCare"));
const PatientProcedure = lazy(() => import("../pages/dashboard/ehr/PatientProcedure"));
const FunctionalAndCognitiveStatus = lazy(() => import("../pages/dashboard/ehr/FunctionalAndCognitiveStatus"));
const ChiefComplaintsAndHPI = lazy(() => import("../pages/dashboard/ehr/ChiefComplaintsAndHPI"));
const Vitals = lazy(() => import("../pages/dashboard/ehr/Vitals"));
const PatientEncounters = lazy(() => import("../pages/dashboard/ehr/PatientEncounters"));

export type RouteType = {
    displayName: string;
    path: string;
    component: React.ReactElement;
    isProtected: boolean;
    allowedRoles?: string[];
    showInNavbar: boolean;
    showInDashboard?: boolean;
    icon?: string;
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
  },
  {
    displayName: "Profile",
    path: "/profile-settings/profile",
    component: <Profile />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: false,
  },
  {
    displayName: "Profile Settings",
    path: "/profile-settings",
    component: <ProfileSettings />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: true,
    icon: SettingsIcon,
  },
  {
    displayName: "Specialties & Services",
    path: "/specialties-services",
    component: <SpecialtiesServices />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: true,
    icon: SpecialtiesIcon,
  },
  {
    displayName: "Appointments",
    path: "/appointments",
    component: <Calendar />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: true,
    icon: CalendarIcon,
  },
  {
    displayName: "Account Settings",
    path: "/account-settings",
    component: <AccountSettings />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: true,
    icon: SettingsIcon,
  },
  {
    displayName: "Patients",
    path: "/patients",
    component: <Patients />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: true,
    icon: PatientlistIcon,
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
    displayName: "Assessment & Diagnosis",
    path: "/patients/assessment-and-diagnosis",
    component: <AssessmentAndDiagnosis />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: false,
  },
  {
    displayName: "Plan of Care",
    path: "/patients/plan-of-care",
    component: <PlanOfCare />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: false,
  },
  {
    displayName: "Patient Procedure",
    path: "/patients/patient-procedure",
    component: <PatientProcedure />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: false,
  },
  {
    displayName: "Functional And Cognitive Status",
    path: "/patients/functional-and-cognitive-status",
    component: <FunctionalAndCognitiveStatus />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: false,
  },
  {
    displayName: "Chief Complaints and HPI(History Of Present Illness)",
    path: "/patients/chief-complaints-and-HPI",
    component: <ChiefComplaintsAndHPI />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: false,
  },
  {
    displayName: "Vitals",
    path: "/patients/vitals",
    component: <Vitals />,
    isProtected: true,
    showInNavbar: false,
    showInDashboard: false,
  },

  {
    displayName: "Patient encounters",
    path: "/encounters",
    component: <PatientEncounters />,
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
    icon: LogOutIcon,
  },
];

export default routes;
