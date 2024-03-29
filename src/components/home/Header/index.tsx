import {
  Flex, Image, Box, Button,
} from "@chakra-ui/react";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { Link } from "react-router-dom";

import HeaderDescription from "./HeaderDescription";
import { SpacedContainer } from "../../common/Containers";
import LandingDoctorIMG from "../../../static/LandingDoctor.png";
import dotsSVG from "../../../static/dots.svg";

const HeaderDokto = () => (
  <Box position="relative">
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
            <Link to="/available-care">
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
                display={["none", "none", "none", "none", "block"]}
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
            </Link>

          </Box>
          <Image src={LandingDoctorIMG} fit="contain" />
        </Box>
      </Flex>
    </SpacedContainer>
    <Image
      src={dotsSVG}
      position="absolute"
      zIndex={-1}
      top={[12, 12, 12, 20, 20]}
      left={0}
    />
  </Box>
);

export default HeaderDokto;
