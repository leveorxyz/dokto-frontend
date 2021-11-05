import MessageSupport from "../components/contact_us/MessageSupport";
import QuickHelp from "../components/contact_us/QuickHelp";
import Banner from "../components/common/Banner";
import ContactBackground from "../static/Frame.png";

const ContactUs = () => (
  <>
    <Banner text="Contact Us" imgSrc={ContactBackground} />
    <QuickHelp />
    <MessageSupport />
  </>
);

export default ContactUs;
