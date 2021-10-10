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
        fontSize={["5xl", "5xl", "5xl", "6xl"]}
        minWidth={["100%", "100%", "50%", "45%"]}
        fontWeight={900}
      >
        {text}
      </Heading>
      <Image src={imgSrc} fill="contain" height="80%" />
    </Flex>
  </SpacedContainer>
);

export default CommonHeader;
