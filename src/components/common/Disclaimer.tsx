import { Box } from "@chakra-ui/react";
import React from "react";
import { SpacedContainer } from "./Containers";

const Disclaimer = () => (
  <SpacedContainer>
    <Box as="h3" fontSize="xs" textAlign="center" fontWeight="400" color="gray.400" mb="30">
      The Telehealth services made available through dot website and mobile apps are
      provided by licensed and credentialed physicians practicing within a
      group or independently owned medical professional practice. Dokto, Inc. does not
      itself provide any doctor, mental health or other healthcare provider services.
    </Box>
  </SpacedContainer>
);

export default Disclaimer;
