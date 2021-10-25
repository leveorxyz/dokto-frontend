import React, { Suspense, lazy } from "react";

const AboutUs = lazy(() => import("../../pages/AboutUs"));
const NotImplemented = lazy(() => import("../NotImplemented"));
const TermsAndConditions = lazy(() => import("../../pages/TermsAndConditions"));

type linkType = {
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
    path: "/t&cs",
    component: <LazyLoader><TermsAndConditions /></LazyLoader>,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "Privacy Policy",
    path: "/privacy_policy",
    component: <LazyLoader><NotImplemented /></LazyLoader>,
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
