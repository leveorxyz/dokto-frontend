import React, { Suspense, lazy } from "react";

const NotImplemented = lazy(() => import("../NotImplemented"));
const TermsAndConditions = lazy(() => import("../../pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("../../pages/PrivacyPolicy"));
const ContactUs = lazy(() => import("../../pages/ContactUs"));

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

const BottomLinks: linkType[] = [
  {
    displayName: "Terms & Conditions",
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
    displayName: "HIPAA",
    path: "/hipaaa_policy",
    component: <LazyLoader><NotImplemented /></LazyLoader>,
    isProtected: false,
    showInNavbar: true,
  },
  {
    displayName: "Contact Us",
    path: "/contact",
    component: <LazyLoader><ContactUs /></LazyLoader>,
    isProtected: false,
    showInNavbar: true,
  },
];

export default BottomLinks;
