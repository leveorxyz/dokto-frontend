import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { SpacedContainer } from "../common/Containers";

const AvailableCareHeader = () => (
  <div>
    <SpacedContainer py="20">
      <Heading as="h1" fontWeight="bold" fontSize="8xl">Available Care</Heading>
      <Heading as="h2" fontWeight="bold" fontSize="2xl" color="purple" mb="4">What We Treat</Heading>
      <Box fontSize="md" color="gray" mb="2">
        In the new normal era like now, your health is very important,
        <br />
        especially the Covid-19 cases are increasing every day.
        <br />
        therefore your health, happiness for medical personnel.
      </Box>
    </SpacedContainer>
  </div>
);

export default AvailableCareHeader;
