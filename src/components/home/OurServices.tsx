import React from "react";
import {
  Box, Heading, Grid, Center, Divider,
} from "@chakra-ui/react";

import OurServicesCard from "./OurServicesCard";
import { SpacedContainer } from "../common/Containers";
import OurServicesData from "./OurServicesData";

export default function OurServices() {
  return (
    <SpacedContainer py={24}>
      <Center display="flex" flexDir="column" borderColor="darkPink">
        <Heading as="h2" fontWeight="bold" fontSize="2xl" textTransform="uppercase">Our Services</Heading>
        <Divider w="10" h="2" mb="100" />
        <Grid
          width="100%"
          templateColumns={{
            base: "repeat(1, 1fr)", sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)",
          }}
          gap={[6, 6, 12, 24, 24]}
        >
          {OurServicesData.map(({
            id, Icon, title, description,
          }) => (
            <OurServicesCard
              key={id}
              icon={(
                <Box
                  padding={4}
                  bg="#3DE0FF"
                  rounded="full"
                  w="min-content"
                >
                  <Icon size={28} />
                </Box>
              )}
              title={title}
              description={description}
            />
          ))}
        </Grid>
      </Center>
    </SpacedContainer>
  );
}
