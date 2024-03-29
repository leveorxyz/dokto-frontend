import {
  Heading, Box, Container, Link, Image,
} from "@chakra-ui/react";

import LeftRightArrow from "../../common/buttons/LeftRightArrow";
import { SpacedContainer } from "../../common/Containers";
import OurFeaturedDoctors from "./OurFeaturedDoctors";
import UnderlinedHeader from "../../common/UnderlinedHeader";
import DoktoIcon from "../../../static/DoktoIcon.png";

const OurDoctors = () => (
  <Box bg="#F4F4F4">
    <SpacedContainer py="16">
      <Box d="flex" flexDir="column" alignItems="center" borderColor="#170041">
        <Box mb={12}>
          <UnderlinedHeader title="Our Doctors" underlineColor="brand.darkPink" />
        </Box>
        <Container maxW="100%">
          <Box d="flex" justifyContent="space-between" alignItems="center" mb="7">
            <Box><Heading as="h2" fontSize="3xl" alignItems="center" fontWeight="bold" color="#170041">Featured Doctors</Heading></Box>
            <Box>
              <LeftRightArrow />
            </Box>
          </Box>
          <OurFeaturedDoctors />
        </Container>
        <Link href="/" color="brand.dark" mt="14" fontSize="lg" cursor="pointer" fontWeight="bold" _hover={{ outline: "none" }}>View All Doctors</Link>
      </Box>
      <Box
        as="button"
        bgColor="brand.darkPink"
        color="white"
        rounded="3xl"
        p={6}
        mx="auto"
        mt={24}
        textTransform="uppercase"
        _hover={{ opacity: ".9" }}
        _active={{ opacity: ".9" }}
        d="flex"
        flexDir="row"
        alignItems="center"
        flexWrap="nowrap"
      >
        <Box fontSize="5xl" fontWeight={800}>See a Doctor Now</Box>
        <Image src={DoktoIcon} ml={12} height="6rem" width="auto" fit="contain" />
      </Box>
    </SpacedContainer>
  </Box>
);

export default OurDoctors;
