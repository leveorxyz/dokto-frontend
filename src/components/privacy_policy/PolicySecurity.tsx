/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const PolicySecurity = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Security</Heading>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="2xl" mb="4">How do we protect your information?</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          We implement a variety of security measures to maintain the safety of your personal information when you place an order, or enter, submit, or access your personal information.
        </Box>
        <Box mb="4">
          We offer the use of a secure server. All supplied sensitive or credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted: Payment Information are tokenized and are PCI DSS protected: Photo ID information are also securely stored with a 3rd Party provider. None of these data points are saved on our server nor on the Mobile App.
        </Box>
      </Box>
    </SpacedContainer>
  </div>
);

export default PolicySecurity;
