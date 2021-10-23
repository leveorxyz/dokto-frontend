import React from "react";
import {
  Box, Heading, Grid, Center, Divider,
} from "@chakra-ui/react";

import OurServicesCard from "./OurServicesCard";
import { SpacedContainer } from "../common/Containers";
import OurServicesData from "./OurServicesData";

export default function OurServices() {
  return (
    <div>
      <Box w="100%" py="100">
        <SpacedContainer>
          <Center display="flex" flexDir="column" borderColor="plum">
            <Heading as="h2" fontWeight="bold" fontSize="2xl" textTransform="uppercase">Our Services</Heading>
            <Divider w="10" h="2" mb="100" />
            <Grid
              templateColumns={{
                sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)", base: "repeat(1, 1fr)",
              }}
              gap={6}
            >
              {OurServicesData.map(({
                id, Icon, title, description,
              }) => (
                <OurServicesCard
                  key={id}
                  icon={(
                    <Box
                      padding={4}
                      bg="cyan.500"
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
      </Box>
    </div>
  );
}
