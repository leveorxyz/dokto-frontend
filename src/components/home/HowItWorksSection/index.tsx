import React from "react";
import {
  Box, Flex, Image,
} from "@chakra-ui/react";

import { SpacedContainer } from "../../common/Containers";
import Description from "./Description";
import StethoscopeIMG from "../../../static/stetho.png";

const HowItWorks = () => (
  <div>
    <SpacedContainer mb="100">
      <Flex
        direction={{
          sm: "column", md: "row", lg: "row", xl: "row", base: "column",
        }}
        alignItems="center"
      >
        <Box flex="1"><Image src={StethoscopeIMG} fit="contain" overflow="hidden" /></Box>
        <Box flex="1"><Description /></Box>
      </Flex>
    </SpacedContainer>
  </div>
);

export default HowItWorks;
