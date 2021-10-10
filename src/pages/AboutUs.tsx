import React from "react";
import FooterDoctor from "../components/home/FooterDoctor";
import Description from "../components/about_us/Description";
import Banner from "../components/common/Banner";
import FactSection from "../components/about_us/FactSection";
import MemberEngagement from "../components/about_us/MemberEngagement";

const AboutUs = () => (
  <div>
    <Banner text="About Us" imgSrc="https://source.unsplash.com/collection/42413461/500x300" />
    <FactSection />
    <MemberEngagement />
    <Description />
    <FooterDoctor />
  </div>
);

export default AboutUs;
