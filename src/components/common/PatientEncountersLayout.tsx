import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "./Containers";

interface props{
  children: JSX.Element;
}

const PatientEncountersLayout :React.FC<props> = ({ children }) => (
  <Box backgroundColor="#f7f7fc" minH="100vh">
    <SpacedContainer>
      <Heading fontSize="xl" fontWeight="600" color="brand.darkPink" py="8">
        PATIENT ENCOUNTERS
      </Heading>
    </SpacedContainer>
    <Box pb={12}>{children}</Box>
  </Box>
);

export default PatientEncountersLayout;
