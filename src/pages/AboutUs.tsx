import React from "react";
import FooterDoctor from "../components/home/FooterDoctor";
import AboutUsDescription from "../components/about_us/AboutUsDescription";
import CommonHeader from "../components/common/CommonHeader";
import AboutUsFacts from "../components/about_us/AboutUsFacts";

const AboutUs = () => (
  <div>
    <CommonHeader text="About Us" />
    <AboutUsFacts />
    <AboutUsDescription />
    <FooterDoctor />
  </div>
);

export default AboutUs;
