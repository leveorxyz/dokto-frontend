import Description from "../components/about_us/Description";
import Banner from "../components/common/Banner";
import FactSection from "../components/about_us/FactSection";
import AboutBackground from "../static/Group 96.png";
import MemberEngagement from "../components/about_us/MemberEngagement";

const AboutUs = () => (
  <div>
    <Banner text="About Us" imgSrc={AboutBackground} />
    <FactSection />
    <MemberEngagement />
    <Description />
  </div>
);

export default AboutUs;
