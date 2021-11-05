import React, { Suspense, lazy } from "react";

import Loading from "../fallback/Loading";

const AboutUs = lazy(() => import("../../pages/AboutUs"));
const NotImplemented = lazy(() => import("../NotImplemented"));
const TermsAndConditions = lazy(() => import("../../pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("../../pages/PrivacyPolicy"));

type linkType = {
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

const FooterLinks: linkType[] = [
  {
    displayName: "About Us",
    path: "/about",
    component: <LazyLoader><AboutUs /></LazyLoader>,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "FAQs",
    path: "/faqs",
    component: <LazyLoader><NotImplemented /></LazyLoader>,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "T&Cs",
    path: "/terms-and-conditions",
    component: <LazyLoader><TermsAndConditions /></LazyLoader>,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "Privacy Policy",
    path: "/privacy-policy",
    component: <LazyLoader><PrivacyPolicy /></LazyLoader>,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "HIPAA Policy",
    path: "/hipaaa_policy",
    component: <LazyLoader><NotImplemented /></LazyLoader>,
    isProtected: false,
    showInNavbar: true,
  },
];

export default FooterLinks;
