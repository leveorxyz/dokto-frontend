import {
  Heading, Box, Flex, Button, Divider, Image,
} from "@chakra-ui/react";

import { SpacedContainer } from "../common/Containers";
import doctorsSVG from "../../static/doctors.svg";

const QualityCare = () => (
  <div>
    <SpacedContainer py={100}>
      <Flex direction="column" alignItems="center">
        <Image src={doctorsSVG} height="100%" fit="contain" overflow="hidden" />
        <Heading as="h1" fontWeight="bold" fontSize="7xl" pt="12" color="purple" textAlign="center">Quality care with peace of mind.</Heading>
        <Box p="12" borderColor="cyan.500">
          <Divider />
          <Box fontSize="md" color="gray" py="1rem" px={[0, 0, "3rem", "4rem"]}>Our board-certified doctors and specialists can diagnose and treat a wide variety of things remotely.</Box>
          <Divider />
        </Box>
        <Button bg="purple" color="white" rounded="full" py="1.5rem" px="3rem" textTransform="uppercase" _hover={{ opacity: ".9" }} _active={{ opacity: ".9" }}>See a doctor now</Button>
      </Flex>
    </SpacedContainer>
  </div>
);

export default QualityCare;
