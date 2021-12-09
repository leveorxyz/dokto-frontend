import {
  Heading,
  Box,
} from "@chakra-ui/react";

import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";
import doctorProfileAtom from "../../../atoms/doctorProfile";
import useProfile from "../../../hooks/profile/useProfile";
import LoadingPage from "../../../components/common/fallback/LoadingPage";
import FunctionalAndCognitiveStatusForm from "../../../components/forms/functional-and-cognitive-status";

export default function FunctionalAndCognitiveStatus() {
  const { isLoading } = useProfile("doctor", doctorProfileAtom);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <PatientEncountersLayout>
      <Box
        d="flex"
        flexDir="column"
        borderRadius="md"
        borderColor="brand.darkPink"
        boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
        pt="8"
        backgroundColor="#fff"
      >
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5" background="primary.light" p="2" px="6">Functional And Cognitive Status</Heading>
        <Box p="4" px="6">
          <FunctionalAndCognitiveStatusForm />
        </Box>
      </Box>
    </PatientEncountersLayout>
  );
}
