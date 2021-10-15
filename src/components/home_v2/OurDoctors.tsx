import React from "react";
import {
  Divider, Heading, Box,
} from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";
import OurFeaturedDoctors from "./OurFeaturedDoctors";

const OurDoctors = () => (
  <div>
    <SpacedContainer mb="100">
      <Box d="flex" flexDir="column" alignItems="center">
        <Heading as="h2" fontWeight="bold" fontSize="2xl" textTransform="uppercase">Our doctors</Heading>
        <Divider w="14" h="2" mb="6" />
        <OurFeaturedDoctors />
      </Box>
    </SpacedContainer>
  </div>
);

export default OurDoctors;
