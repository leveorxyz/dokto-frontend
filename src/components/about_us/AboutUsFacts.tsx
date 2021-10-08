import React from "react";
import { Box, Heading, Grid } from "@chakra-ui/react";
import PeopleCard from "./PeopleCard";
import GlobeCard from "./GlobeCard";
import BusinessCard from "./BusinessCard";

const AboutUsFacts = () => (
  <div>
    <Box maxW="100%" pb="200">
      <Box w="100%" bg="#0099cc" pt="20">
        <Box px={[6, 6, 32, 32, 32]} py={5}>
          <Heading pb="14" color="white" fontSize="4xl">Dokto Facts</Heading>
          <Box>
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)",
              }}
              gap={6}
            >
              <PeopleCard />
              <GlobeCard />
              <BusinessCard />
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  </div>
);

export default AboutUsFacts;
