import React from "react";
import { Flex, Image, Box } from "@chakra-ui/react";
import HeaderDescription from "./HeaderDescription";
import { SpacedContainer } from "../common/Containers";

const HeaderDokto = () => (
  <div>
    <SpacedContainer py="20">
      <Flex
        direction={{
          sm: "column", md: "row", lg: "row", xl: "row", base: "column",
        }}
        alignItems="center"
      >
        <Box flex="1" mb="10"><HeaderDescription /></Box>
        <Image flex="1" src="https://source.unsplash.com/collection/42413461/500x300" height="100%" fit="contain" overflow="hidden" />
      </Flex>
    </SpacedContainer>
  </div>
);

export default HeaderDokto;
