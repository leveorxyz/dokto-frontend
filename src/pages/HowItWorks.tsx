import Banner from "../components/common/Banner";
import Description from "../components/how_it_works/Description";
import Process from "../components/how_it_works/Process";
import HowItWorksIMG from "../static/HowItWorks.png";

const HowItWorks = () => (
  <div>
    <Banner text="How It Works" imgSrc={HowItWorksIMG} />
    <Description />
    <Process />
  </div>
);

export default HowItWorks;
