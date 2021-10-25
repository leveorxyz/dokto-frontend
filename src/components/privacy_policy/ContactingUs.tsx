/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const ContactingUs = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Contacting Us:</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          If there are any questions regarding this privacy policy, you may contact us using the information below.
        </Box>
        <Box mb="4">
          Dokto Inc.
          <br />
          540 East McNab Rd., Suite C
          <br />
          Pompano Beach, FL 33068
          <br />
          844.365.4822
          <br />
          info@dokto.com
        </Box>
      </Box>
    </SpacedContainer>
  </div>
);

export default ContactingUs;
