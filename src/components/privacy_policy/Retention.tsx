/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const Retention = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Retention</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        <Box mb="4">
          We will retain your information if your account is active, or the information is necessary to be retained as set forth in this policy. We also will retain and use this information to the extent it is necessary for us to comply with legal obligations.
        </Box>
      </Box>
    </SpacedContainer>
  </div>
);

export default Retention;
