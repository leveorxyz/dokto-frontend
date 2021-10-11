import React from "react";

import MessageSupport from "../components/contact_us/MessageSupport";
import QuickHelp from "../components/contact_us/QuickHelp";
import Banner from "../components/common/Banner";
import FooterDoctor from "../components/home/FooterDoctor";

const ContactUs = () => (
  <>
    <Banner text="Contact Us" imgSrc="https://source.unsplash.com/collection/42413461/500x300" />
    <QuickHelp />
    <MessageSupport />
    <FooterDoctor />
  </>
);

export default ContactUs;
