/* eslint-disable max-len */
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { SpacedContainer } from "../common/Containers";

const DescriptionWorkDoctor = () => (
  <SpacedContainer>
    <Heading as="h2" fontWeight="bold" fontSize="4xl" mb="4" color="#333333">What To Expect To During A Visit</Heading>
    <Box fontSize="xl" color="gray.500">
      <Box mb="4">Our doctors are licensed professionals, experienced in conducting virtual consultations and getting to the heart of your complaint and recommending treatment as quickly and empathically as possible. Our state-of-the-art Telehealth software systems allow our specialists to care for you through live video consultations.</Box>
      <Box>Most of our virtual care visits take between 15-30 minutes to diagnose and treat, but you can always request additional time. Our doctors will review your medical history, answer questions, diagnose, treat and even prescribe medication.</Box>
    </Box>
  </SpacedContainer>
);

export default DescriptionWorkDoctor;
