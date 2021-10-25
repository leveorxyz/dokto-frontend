/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const HowPolicyApplies = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">How this Policy Applies</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          This policy describes the information we collect, how we use that information, and our legal basis for doing so. It also covers whether we share that information, how we share that information, and your rights regarding the information you provide us.
        </Box>
        <Box mb="4">
          By using this website, and any of our services you’re acknowledging you have agreed to our Terms of Use, and that you have read and understand this Privacy Policy and our Cookie Policy.
        </Box>
      </Box>
    </SpacedContainer>
  </div>
);

export default HowPolicyApplies;
