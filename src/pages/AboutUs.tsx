import React from "react";
import FooterDoctor from "../components/home/FooterDoctor";
import AboutUsDescription from "../components/about_us/AboutUsDescription";
import CommonHeader from "../components/common/CommonHeader";
import AboutUsFacts from "../components/about_us/AboutUsFacts";
import MemberEngagementDoctor from "../components/about_us/MemberEngagementDoctor";

const AboutUs = () => (
  <div>
    <CommonHeader text="About Us" />
    <AboutUsFacts />
    <MemberEngagementDoctor />
    <AboutUsDescription />
    <FooterDoctor />
  </div>
);

export default AboutUs;
