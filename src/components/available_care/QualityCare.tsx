import {
  Heading, Box, Flex, Button, Divider, Image,
} from "@chakra-ui/react";
import React from "react";
import { SpacedContainer } from "../common/Containers";

const QualityCare = () => (
  <div>
    <SpacedContainer>
      <Flex direction="column" alignItems="center">
        <Image src="https://source.unsplash.com/collection/42413461/500x300" height="100%" fit="contain" overflow="hidden" />
        <Heading as="h1" fontWeight="bold" fontSize="7xl" pt="12" color="purple" textAlign="center">Quality care with peace of mind.</Heading>
        <Box p="12" borderColor="cyan.500">
          <Divider />
          <Box fontSize="md" color="gray" py="1rem" px="4rem">Our board-certified doctors and specialists can diagnose and treat a wide variety of things remotely.</Box>
          <Divider />
        </Box>
        <Button bg="purple" color="white" rounded="full" py="1.5rem" px="3rem" textTransform="uppercase">See a doctor now</Button>
      </Flex>
    </SpacedContainer>
  </div>
);

export default QualityCare;
