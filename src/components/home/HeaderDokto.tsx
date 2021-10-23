import { Flex, Image, Box } from "@chakra-ui/react";
import HeaderDescription from "./HeaderDescription";
import { SpacedContainer } from "../common/Containers";

import imgSrc from "../../static/LandingDoctor.png";

const HeaderDokto = () => (
  <SpacedContainer py="20">
    <Flex
      direction={{
        sm: "column", md: "row", lg: "row", xl: "row", base: "column",
      }}
      alignItems="center"
    >
      <Box flex="1" mb="10">
        <HeaderDescription />
      </Box>
      <Image flex="1" src={imgSrc} height="50%" fit="contain" overflow="hidden" />
    </Flex>
  </SpacedContainer>
);

export default HeaderDokto;
