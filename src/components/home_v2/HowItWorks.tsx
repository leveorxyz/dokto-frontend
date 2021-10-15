import React from "react";
import {
  Box, Flex, Image,
} from "@chakra-ui/react";
import { SpacedContainer } from "../common/Containers";
import DescriptionHowItWorks from "./DescriptionHowItWorks";

const HowItWorks = () => (
  <div>
    <SpacedContainer mb="100">
      <Flex
        direction={{
          sm: "column", md: "row", lg: "row", xl: "row", base: "column",
        }}
        alignItems="center"
      >
        <Box flex="1"><Image src="https://source.unsplash.com/collection/42413461/500x300" fit="contain" overflow="hidden" /></Box>
        <Box flex="1"><DescriptionHowItWorks /></Box>
      </Flex>
    </SpacedContainer>
  </div>
);

export default HowItWorks;
