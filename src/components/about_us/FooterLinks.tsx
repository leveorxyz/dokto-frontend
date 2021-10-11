import AboutUs from "../../pages/AboutUs";
import NotImplemented from "../NotImplemented";

type linkType = {
    content: string;
    url: string;
    component: () => JSX.Element;
    isProtected: boolean;
    allowedRoles?: string[];
}

const FooterLinks: linkType[] = [
  {
    content: "About Us",
    url: "/about",
    component: AboutUs,
    isProtected: false,
  },
  {
    content: "FAQs",
    url: "/faqs",
    component: NotImplemented,
    isProtected: false,
  },
  {
    content: "T&Cs",
    url: "/t&cs",
    component: NotImplemented,
    isProtected: false,
  },
  {
    content: "Privacy Policy",
    url: "/privacy_policy",
    component: NotImplemented,
    isProtected: false,
  },
  {
    content: "HIPAA Policy",
    url: "/hipaaa_policy",
    component: NotImplemented,
    isProtected: false,
  },
];

export default FooterLinks;
