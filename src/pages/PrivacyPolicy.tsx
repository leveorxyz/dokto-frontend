import React from "react";
import FooterDoctor from "../components/home/FooterDoctor";
import Banner from "../components/common/Banner";
import AboutBackground from "../static/Group 96.png";
import TableofContents from "../components/privacy_policy/TableofContents";
import ChangesTermsofUse from "../components/privacy_policy/ChangesTermsofUse";
import TermsofUse from "../components/privacy_policy/TermsofUse";
import HowPolicyApplies from "../components/privacy_policy/HowPolicyApplies";
import WhatInformationCollect from "../components/privacy_policy/WhatInformationCollect";
import HowUseInformation from "../components/privacy_policy/HowUseInformation";
import HowInformationShared from "../components/privacy_policy/HowInformationShared";
import SharedThirdParties from "../components/privacy_policy/SharedThirdParties";
import CookiesandData from "../components/privacy_policy/CookiesandData";
import MarketingandEmail from "../components/privacy_policy/MarketingandEmail";
import Retention from "../components/privacy_policy/Retention";
import YourRights from "../components/privacy_policy/YourRights";
import PolicySecurity from "../components/privacy_policy/PolicySecurity";
import ChildrensPrivacy from "../components/privacy_policy/ChildrensPrivacy";
import ContactingUs from "../components/privacy_policy/ContactingUs";

const PrivacyPolicy = () => (
  <div>
    <Banner text="Privacy Policy" imgSrc={AboutBackground} />
    <TableofContents />
    <ChangesTermsofUse />
    <TermsofUse />
    <HowPolicyApplies />
    <WhatInformationCollect />
    <HowUseInformation />
    <HowInformationShared />
    <SharedThirdParties />
    <CookiesandData />
    <MarketingandEmail />
    <Retention />
    <YourRights />
    <PolicySecurity />
    <ChildrensPrivacy />
    <ContactingUs />
    <FooterDoctor />
  </div>
);

export default PrivacyPolicy;
