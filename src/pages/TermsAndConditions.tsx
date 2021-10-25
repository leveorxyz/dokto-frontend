import React from "react";
import FooterDoctor from "../components/home/FooterDoctor";
import Banner from "../components/common/Banner";
import AboutBackground from "../static/Group 96.png";
import DescriptionTermsConditions from "../components/terms_and_conditions/DescriptionTermsConditions";
import DescriptionSecurity from "../components/terms_and_conditions/DescriptionSecurity";
import HealthCareServices from "../components/terms_and_conditions/HealthCareServices";
import DeactivationAccount from "../components/terms_and_conditions/DeactivationAccount";
import Disclaimer from "../components/terms_and_conditions/Disclaimer";
import Surveys from "../components/terms_and_conditions/Surveys";

const TermsAndConditions = () => (
  <div>
    <Banner text="Terms &amp; Conditions" imgSrc={AboutBackground} />
    <DescriptionTermsConditions />
    <DescriptionSecurity />
    <HealthCareServices />
    <DeactivationAccount />
    <Disclaimer />
    <Surveys />
    <FooterDoctor />
  </div>
);

export default TermsAndConditions;
