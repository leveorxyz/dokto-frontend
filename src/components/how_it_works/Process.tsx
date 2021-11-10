import React from "react";
import { Heading, Box } from "@chakra-ui/react";

import { SpacedContainer } from "../common/Containers";
import Timeline from "./Timeline";

const ProcessWorkDoctor = () => (
  <SpacedContainer py={24}>
    <Heading as="h2" fontWeight="bold" fontSize="4xl" mb="4" color="#333333">Our Process</Heading>
    <Heading as="h4" fontSize="2xl" mb="4" color="brand.darkPink" fontWeight="normal">Dokto has created a simple and effective way for patients to receive treatment and consultations from our vast network of board-certified doctors, therapists, and specialists.</Heading>
    <Box py={[12, 24, 24, 24, 24]}>
      <Timeline />
    </Box>
  </SpacedContainer>
);

export default ProcessWorkDoctor;
