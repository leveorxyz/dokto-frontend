/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";

const AboutUsDescription = () => (
  <SpacedContainer>
    <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Virtual care without boundaries</Heading>
    <Box fontSize="lg" color="#858585" pb="20">
      <Box mb="4">Our aim is to provide patients with immediate access to our vast network of qualified healthcare professionals, providing a secure platform for virtual consultancy at a time that’s convenient for both provider and patient. We are passionate about improving the quality, affordability, and accessibility of healthcare around the world.</Box>
      <Box mb="4">Through the convenience of web, phone, chat, video or text, our patients can request a virtual consultation with any member of our extensive provider population while assured of our rigorous standards of vetting and quality control when it comes to our doctors and providers.</Box>
      <Box mb="4">Our end-to-end service ensures that our patients are attended to with optimum care, having their wellbeing enhanced by detailed health records, diagnoses and prescriptions – all recorded with just a few clicks. We keep security a priority and utilize state-of-the-art security and encryption protocols, making Dokto compliant with HIPAA requirements.</Box>
      <Box mb="4">At Dokto, we believe that everyone should have access to excellent healthcare. Get better, sooner, from the convenience of your home or office.</Box>
    </Box>
  </SpacedContainer>
);

export default AboutUsDescription;
