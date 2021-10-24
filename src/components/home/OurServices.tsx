import React from "react";
import {
  Box, Grid, Center, Image,
} from "@chakra-ui/react";

import OurServicesCard from "./OurServicesCard";
import { SpacedContainer } from "../common/Containers";
import OurServicesData from "./OurServicesData";
import UnderlinedHeader from "../common/UnderlinedHeader";

export default function OurServices() {
  return (
    <SpacedContainer py={24}>
      <Center display="flex" flexDir="column" borderColor="#A42BAD">
        <Box mb={24}>
          <UnderlinedHeader title="Our Services" underlineColor="#A42BAD" />
        </Box>

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
