import { Box } from "@chakra-ui/react";
import React from "react";
import QuickHelpDoctor from "../components/contact_us/QuickHelpDoctor";
import Banner from "../components/common/Banner";

const ContactUs = () => (
  <div>
    <Box>
      <Banner text="Contact Us" imgSrc="https://source.unsplash.com/collection/42413461/500x300" />
      <QuickHelpDoctor />
    </Box>
  </div>
);

export default ContactUs;
