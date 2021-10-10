import { Box } from "@chakra-ui/react";
import React from "react";
import QuickHelpDoctor from "../components/contact_us/QuickHelpDoctor";
import CommonHeader from "../components/common/CommonHeader";

const ContactUs = () => (
  <div>
    <Box>
      <CommonHeader text="Contact Us" />
      <QuickHelpDoctor />
    </Box>
  </div>
);

export default ContactUs;
