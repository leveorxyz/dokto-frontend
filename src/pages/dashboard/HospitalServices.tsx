import {
  Heading, Box, Flex,
  Divider,
} from "@chakra-ui/react";
import { SpacedContainer } from "../../components/common/Containers";
import ServicesCard from "../../components/profile/hospital/ServicesCard";

const HospitalServices = () => (
  <SpacedContainer py={10} mx={12}>
    <Box
      d="flex"
      flexDir="column"
      borderRadius="3xl"
      borderColor="brand.darkPink"
    >
      <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5">Services</Heading>
      <Divider mb="5" />
      <Box bg="white" p="8" borderRadius="lg">
        <Flex direction="column">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </Flex>
      </Box>
    </Box>
  </SpacedContainer>
);

export default HospitalServices;
