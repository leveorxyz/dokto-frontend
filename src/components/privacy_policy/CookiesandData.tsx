/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const CookiesandData = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">How This Information Is Shared</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          We use cookies, tags, scripts and other technologies in conducting our business. Information about the technologies we use and why we use them can be found in our Cookie Policy.
        </Box>
      </Box>
    </SpacedContainer>
  </div>
);

export default CookiesandData;
