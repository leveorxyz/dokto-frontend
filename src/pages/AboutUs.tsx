import React from "react";
import FooterDoctor from "../components/home/FooterDoctor";
import AboutUsDescription from "../components/about_us/AboutUsDescription";
import CommonHeader from "../components/common/CommonHeader";

const AboutUs = () => (
  <div>
    <CommonHeader text="About Us" />
    <AboutUsDescription />
    <FooterDoctor />
  </div>
);

export default AboutUs;
