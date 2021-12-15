import {
  Flex, Box, Heading, Image,
} from "@chakra-ui/react";

import { SpacedContainer } from "../common/Containers";
import Banner from "../../static/PharmacyDashboard/Banner.png";

export default function PharmacyDashboard() {
  return (
    <SpacedContainer mx={4}>
      <Heading as="h2" py="4" color="#11142D" fontSize="2xl" fontWeight="semibold">Dashboard</Heading>
      <Flex minH="80vh">
        <Box w="70%" />
        <Flex w="30%" justifyContent="center" alignItems="center">
          <Image src={Banner} w="100%" h="auto" />
        </Flex>
      </Flex>
    </SpacedContainer>
  );
}
