import React from "react";
import {
  Divider, Heading, Box, Container, Link,
} from "@chakra-ui/react";

import LeftRightArrow from "../common/buttons/LeftRightArrow";
import { SpacedContainer } from "../common/Containers";
import OurFeaturedDoctors from "./OurFeaturedDoctors";

const OurDoctors = () => (
  <Box bg="gray.100">
    <SpacedContainer py="16">
      <Box d="flex" flexDir="column" alignItems="center" borderColor="darkPink">
        <Heading as="h2" fontWeight="bold" fontSize="2xl" textTransform="uppercase">Our doctors</Heading>
        <Divider w="14" h="2" mb="12" />
        <Container maxW="100%">
          <Box d="flex" justifyContent="space-between" alignItems="center" mb="7">
            <Box><Heading as="h2" fontSize="3xl" alignItems="center" fontWeight="bold" color="#170041">Featured Doctors</Heading></Box>
            <Box>
              <LeftRightArrow />
            </Box>
          </Box>
          <OurFeaturedDoctors />
        </Container>
        <Link href="/" mt="14" fontSize="lg" cursor="pointer" fontWeight="bold" _hover={{ outline: "none" }}>View All Doctors</Link>
      </Box>
    </SpacedContainer>
  </Box>
);

export default OurDoctors;
