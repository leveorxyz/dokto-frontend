import AboutUs from "../../pages/AboutUs";
import NotImplemented from "../NotImplemented";

type linkType = {
    content: string;
    url: string;
    component: () => JSX.Element;
}

const FooterLinks: linkType[] = [
  {
    content: "About Us",
    url: "/about",
    component: AboutUs,
  },
  {
    content: "FAQs",
    url: "/faqs",
    component: NotImplemented,
  },
  {
    content: "T&Cs",
    url: "/t&cs",
    component: NotImplemented,
  },
  {
    content: "Privacy Policy",
    url: "/privacy_policy",
    component: NotImplemented,
  },
  {
    content: "HIPAA Policy",
    url: "/hipaaa_policy",
    component: NotImplemented,
  },
];

export default FooterLinks;
