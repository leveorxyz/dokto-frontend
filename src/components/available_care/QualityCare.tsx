import {
  Heading, Box, Flex, Button, Divider, Image,
} from "@chakra-ui/react";

import { SpacedContainer } from "../common/Containers";
import doctorsSVG from "../../static/doctors.svg";
import Logo from "../../static/dokto_icon_blue_white.svg";

const QualityCare = () => (
  <div>
    <SpacedContainer py={100}>
      <Flex direction="column" alignItems="center">
        <Image src={Logo} height="100%" fit="contain" overflow="hidden" />
        <Image src={doctorsSVG} height="100%" fit="contain" overflow="hidden" />
        <Heading as="h1" fontWeight="bold" fontSize="7xl" pt="12" color="#A42BAD" textAlign="center">Quality care with peace of mind.</Heading>
        <Box p="12" borderColor="#3DE0FF">
          <Divider />
          <Box fontSize="md" color="rgba(51, 51, 51, 0.5)" py="1rem" px={[0, 0, "3rem", "4rem"]}>Our board-certified doctors and specialists can diagnose and treat a wide variety of things remotely.</Box>
          <Divider />
        </Box>
        <Button bg="#A42BAD" color="white" rounded="full" py="1.5rem" px="3rem" textTransform="uppercase" _hover={{ opacity: ".9" }} _active={{ opacity: ".9" }}>See a doctor now</Button>
      </Flex>
    </SpacedContainer>
  </div>
);

export default QualityCare;
