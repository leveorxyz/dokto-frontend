import { Heading } from "@chakra-ui/react";

import { SpacedContainer } from "../common/Containers";

export default function PharmacyDashboard() {
  return (
    <SpacedContainer mx={4}>
      <Heading as="h2" py="4" color="#11142D" fontSize="2xl" fontWeight="semibold">Dashboard</Heading>
    </SpacedContainer>
  );
}
