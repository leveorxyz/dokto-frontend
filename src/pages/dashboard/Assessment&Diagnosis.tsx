import {
  Heading,
  Box,
} from "@chakra-ui/react";

import { SpacedContainer } from "../../components/common/Containers";
import doctorProfileAtom from "../../atoms/doctorProfile";
import useProfile from "../../hooks/profile/useProfile";
import LoadingPage from "../../components/common/fallback/LoadingPage";
import AssessmentAndDiagnosisForm from "../../components/forms/assessment-and-diagnosis";
import PatientEncountersTable from "../../components/common/patientEncounters/PatientEncounters";

export default function AssessmentAndDiagnosis() {
  const { isLoading } = useProfile("doctor", doctorProfileAtom);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <SpacedContainer py={20}>
      <Box
        d="flex"
        flexDir="column"
        borderRadius="3xl"
        borderColor="brand.darkPink"
        boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
        pt="8"
      >
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5" background="primary.light" p="2">Assessment & Diagnosis</Heading>

        <Box p="4">
          <AssessmentAndDiagnosisForm />
          <PatientEncountersTable />
        </Box>

      </Box>
    </SpacedContainer>
  );
}
