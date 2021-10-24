import {
  Flex, Image, Box, Button,
} from "@chakra-ui/react";
import { BiMessageRoundedAdd } from "react-icons/bi";
import HeaderDescription from "./HeaderDescription";
import { SpacedContainer } from "../common/Containers";

import LandingDoctorIMG from "../../static/LandingDoctor.png";

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
      <Box height="20%" position="relative">
        <Box
          position="absolute"
          top={0}
          right={0}
          zIndex={1}
        >
          <Button
            bg="primary.light"
            color="primary.dark"
            w="15rem"
            h="4rem"
            p={6}
            rounded="2xl"
            _hover={{
              opacity: 0.85,
            }}
            _focus={{
              outline: "none",
              opacity: 0.85,
            }}
          >
            <Box
              as={BiMessageRoundedAdd}
              p={1}
              mr={2}
              bg="brand.darkPink"
              rounded="full"
              h="2.5rem"
              w="2.5rem"
              size={24}
              color="white"
            />
            View Services
          </Button>

          <Box
            display={["none", "none", "block", "block", "block"]}
            h="12rem"
            w="100%"
            position="absolute"
            top={6}
            left={6}
            zIndex={-1}
            p={6}
            pt={14}
            bg="brand.darkPink"
            color="white"
            rounded="3xl"
          >
            A comprehensive treatment range with your well-being at heart.
          </Box>
        </Box>
        <Image src={LandingDoctorIMG} fit="contain" />
      </Box>
    </Flex>
  </SpacedContainer>
);

export default HeaderDokto;
