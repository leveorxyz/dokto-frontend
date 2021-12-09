import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "./Containers";

interface props{
  children: React.ReactNode;
}

const PatientEncountersLayout :React.FC<props> = ({ children }) => (
  <Box backgroundColor="#f7f7fc" minH="100vh">
    <SpacedContainer mx={12}>
      <Heading fontSize="xl" fontWeight="600" color="brand.darkPink" py="8">
        PATIENT ENCOUNTERS
      </Heading>
      <Box pb={12}>{children}</Box>
    </SpacedContainer>
  </Box>
);

export default PatientEncountersLayout;
