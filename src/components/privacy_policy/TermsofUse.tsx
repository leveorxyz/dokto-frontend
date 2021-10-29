/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const TermsofUse = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Terms of Use</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        The information on this website is provided for informational purposes, and is provided on an “as is” basis with no guarantees or warranty of any kind. The information is believed to be accurate, but is not guaranteed to be so. By using this website, the associated websites, and any of our services including the mobile App, you agree to hold the company Dokto LLC and its subsidiaries harmless for any actions you take based on the information presented and the results of those actions.
      </Box>
    </SpacedContainer>
  </div>
);

export default TermsofUse;
