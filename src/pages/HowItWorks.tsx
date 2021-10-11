import React from "react";

import Banner from "../components/common/Banner";
import Description from "../components/how_it_works/Description";
import Process from "../components/how_it_works/Process";
import FooterDoctor from "../components/home/FooterDoctor";

const HowItWorks = () => (
  <div>
    <Banner text="About Us" imgSrc="https://source.unsplash.com/collection/42413461/500x300" />
    <Description />
    <Process />
    <FooterDoctor />
  </div>
);

export default HowItWorks;
