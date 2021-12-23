import {
  Heading, Box, Flex, Button,
  Divider,
} from "@chakra-ui/react";
import { SpacedContainer } from "../../components/common/Containers";
import SavedDoctorsList from "../../components/profile/patient/saved_doctors/SavedDoctorsList";

const SavedDoctors = () => (
  <SpacedContainer py={10} mx={12}>
    <Box
      d="flex"
      flexDir="column"
      borderRadius="3xl"
      borderColor="brand.darkPink"
    >
      <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5">Saved Doctors</Heading>
      <Divider mb="5" />
      <Box p="14" bgColor="white" borderRadius="xl">
        <Flex justifyContent="space-between" mb="2">
          <Box />
          <Box d="flex" as={Button} variant="ghost" color="brand.darkPink">
            <Box mr="3">x</Box>
            <Box>Remove all saved Doctors</Box>
          </Box>
        </Flex>
        <SavedDoctorsList />
      </Box>
    </Box>
  </SpacedContainer>
);

export default SavedDoctors;
