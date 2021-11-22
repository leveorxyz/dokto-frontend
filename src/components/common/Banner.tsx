import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";

import { SpacedContainer } from "./Containers";

type PropTypes = {
    text: string;
    imgSrc: string;
}

const CommonHeader = ({ text, imgSrc }:PropTypes) => (
  <SpacedContainer>
    <Flex
      direction={["column", "column", "row", "row"]}
      justify={["center", "center", "space-between", "space-between"]}
      align="center"
      height={["60vh", "45vh", "45vh", "45vh"]}
    >
      <Heading
        fontSize={["5xl", "5xl", "5xl", "7xl", "7xl"]}
        minWidth={["100%", "100%", "50%", "45%"]}
        fontWeight={800}
        color="brand.dark"
      >
        {text}
      </Heading>
      <Image src={imgSrc} fill="contain" height="80%" />
    </Flex>
  </SpacedContainer>
);

export default CommonHeader;
