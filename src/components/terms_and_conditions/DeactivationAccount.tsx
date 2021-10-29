/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const DeactivationAccount = () => (
  <div>
    <SpacedContainer>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Deactivation of Account</Heading>
      <Box fontSize="lg" color="#858585" pb="20">
        I understand that my account may be deactivated upon my request or at the discretion of Dokto for failure to meet these Terms and Conditions.
      </Box>
    </SpacedContainer>
  </div>
);

export default DeactivationAccount;
