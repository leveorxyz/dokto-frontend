import React from "react";
import {
  Heading, Box, Flex,
  Divider,
} from "@chakra-ui/react";
import { SpacedContainer } from "../../components/common/Containers";

import ManageTeamCard from "../../components/profile/hospital/ManageTeamCard";

const ManageTeam = () => (
  <SpacedContainer py={10} mx={12}>
    <Box
      d="flex"
      flexDir="column"
      borderRadius="3xl"
      borderColor="brand.darkPink"
    >
      <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5">Dashboard</Heading>
      <Divider mb="5" />
      <Box bg="white" p="8" borderRadius="lg">
        <Flex justifyContent="space-between">
          <Heading
            as="h2"
            fontSize="xl"
            fontWeight={500}
            color="brand.darkPink"
            p="4"
            mb="5"
          >
            Manage Team
          </Heading>
          <Box
            p="4"
            w="25%"
          >
            Invite doctors
          </Box>
        </Flex>
        <Flex wrap="wrap">
          <ManageTeamCard />
          <ManageTeamCard />
          <ManageTeamCard />
          <ManageTeamCard />
          <ManageTeamCard />
          <ManageTeamCard />
          <ManageTeamCard />
          <ManageTeamCard />
          <ManageTeamCard />
        </Flex>
      </Box>
    </Box>
  </SpacedContainer>
);

export default ManageTeam;
