import React from "react";
import {
  Box, Heading, Grid, Center, Divider, Image,
} from "@chakra-ui/react";

import OurServicesCard from "./OurServicesCard";
import { SpacedContainer } from "../common/Containers";
import OurServicesData from "./OurServicesData";

export default function OurServices() {
  return (
    <SpacedContainer py={24}>
      <Center display="flex" flexDir="column" borderColor="#A42BAD">
        <Heading as="h2" fontWeight="bold" fontSize="2xl" textTransform="uppercase" color="#333333">Our Services</Heading>
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
                  padding={3}
                  bgColor="#3DE0FF"
                  rounded="full"
                  w="max-content"
                >
                  <Image src={Icon} />
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
