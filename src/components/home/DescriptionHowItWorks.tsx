/* eslint-disable max-len */
import React from "react";
import {
  Box, Heading, Divider, Link,
} from "@chakra-ui/react";

const DescriptionHowItWorks = () => (
  <div>
    <Box p="10" borderColor="darkPink">
      <Heading as="h2" fontWeight="bold" fontSize="2xl" textTransform="uppercase">How it works</Heading>
      <Divider w="14" h="2" mb="6" />
      <Box fontSize="md" color="gray" mb="2">We are a website that provides services in the health sector, you can consult  about your health, find a doctor according to your diseases, or find the nearest hospital. You also get the latest articles about the world of health and interesting health tips.</Box>
      <Link href="/" color="#3DE0FF" _hover={{ outline: "none" }}>Read more</Link>
    </Box>
  </div>
);

export default DescriptionHowItWorks;
