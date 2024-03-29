import {
  Heading,
  Box,
} from "@chakra-ui/react";

import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";
import doctorProfileAtom from "../../../atoms/doctorProfile";
import useProfile from "../../../hooks/profile/useProfile";
import LoadingPage from "../../../components/common/fallback/LoadingPage";
import AssessmentAndDiagnosisForm from "../../../components/forms/assessment-and-diagnosis";
import AssessmentAndDiagnosisTable from "../../../components/common/assessmentAndDiagnosis";

export default function AssessmentAndDiagnosis() {
  const { isLoading } = useProfile(doctorProfileAtom);

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
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5" background="primary.light" p="2" px="6">Assessment & Diagnosis</Heading>
        <Box p="4" px="6">
          <AssessmentAndDiagnosisForm />
          <AssessmentAndDiagnosisTable />
        </Box>
      </Box>
    </PatientEncountersLayout>
  );
}
