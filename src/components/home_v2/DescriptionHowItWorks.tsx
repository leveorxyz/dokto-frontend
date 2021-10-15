/* eslint-disable max-len */
import React from "react";
import {
  Box, Heading, Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DescriptionHowItWorks = () => (
  <div>
    <Box>
      <Heading as="h2" fontWeight="bold" fontSize="2xl" textTransform="uppercase">How it works</Heading>
      <Divider w="10" h="2" mb="20" />
      <Box>We are a website that provides services in the health sector, you can consult  about your health, find a doctor according to your diseases, or find the nearest hospital. You also get the latest articles about the world of health and interesting health tips</Box>
      <Link to="/">Read more</Link>
    </Box>
  </div>
);

export default DescriptionHowItWorks;
