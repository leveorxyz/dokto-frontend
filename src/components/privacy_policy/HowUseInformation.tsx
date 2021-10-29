/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const HowUseInformation = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">How We Use This Information</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          Any of the information we collect from you may be used in one of the following ways:
        </Box>
        <Box mb="4">
          To personalize your experience (to present you with more content on the website and via email related to your interests, and less content that doesn’t meet your interests)
        </Box>
        <Box mb="4">
          To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you)
        </Box>
        <Box mb="4">
          To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs)
        </Box>
        <Box mb="4">
          To process transactions
          To send periodic emails
        </Box>
      </Box>
    </SpacedContainer>
  </div>
);

export default HowUseInformation;
