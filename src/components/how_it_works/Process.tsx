import React from "react";
import { Heading, Box } from "@chakra-ui/react";

import { SpacedContainer } from "../common/Containers";
import Timeline from "./Timeline";

const ProcessWorkDoctor = () => (
  <SpacedContainer py={24}>
    <Heading as="h2" fontWeight="bold" fontSize="3xl" mb="4">Our Process</Heading>
    <Heading as="h4" fontSize="2xl" mb="4" color="cyan.500" fontWeight="normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Heading>
    <Box py={[12, 24, 24, 24, 24]}>
      <Timeline />
    </Box>
  </SpacedContainer>
);

export default ProcessWorkDoctor;
