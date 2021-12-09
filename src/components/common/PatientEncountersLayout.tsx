import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "./Containers";

import BackButton from "./buttons/BackButton";

interface props{
  children: React.ReactNode;
}

const PatientEncountersLayout :React.FC<props> = ({ children }) => (
  <Box backgroundColor="#f7f7fc" minH="100vh">
    <SpacedContainer mx={12}>
      <Flex py="8" alignItems="center">
        <Heading fontSize="xl" fontWeight="600" color="brand.darkPink" pr={4}>
          PATIENT ENCOUNTERS
        </Heading>
        <BackButton
          size="sm"
          text="Close Tab"
          bg="rgba(255, 92, 0, 0.1)"
          color="rgba(255, 92, 0, 1)"
        />
      </Flex>
      <Box pb={12}>{children}</Box>
    </SpacedContainer>
  </Box>
);

export default PatientEncountersLayout;
