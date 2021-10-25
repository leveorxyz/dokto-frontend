/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const ChildrensPrivacy = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Children’s Online Privacy Protection Act Compliance</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          We are in compliance with the requirements of COPPA (Children’s Online Privacy Protection Act). We do not collect any information from anyone under 13 years of age. Our website, products, and services are all directed to people who are at least 13 years old or older.
        </Box>
      </Box>
    </SpacedContainer>
  </div>
);

export default ChildrensPrivacy;
