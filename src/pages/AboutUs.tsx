import React from "react";
import FooterDoctor from "../components/home/FooterDoctor";
import AboutUsDescription from "../components/about_us/AboutUsDescription";
import Banner from "../components/common/Banner";
import AboutUsFacts from "../components/about_us/AboutUsFacts";
import MemberEngagementDoctor from "../components/about_us/MemberEngagementDoctor";

const AboutUs = () => (
  <div>
    <Banner text="About Us" imgSrc="https://source.unsplash.com/collection/42413461/500x300" />
    <AboutUsFacts />
    <MemberEngagementDoctor />
    <AboutUsDescription />
    <FooterDoctor />
  </div>
);

export default AboutUs;
