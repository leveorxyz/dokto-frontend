import {
  Heading,
  Box,
} from "@chakra-ui/react";
import PatientProcedureTable from "../../../components/common/patientProcedure";
import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";
import PatientProcedureForm from "../../../components/forms/patient-procedure";
import "react-quill/dist/quill.snow.css";

export default function PatientProcedure() {
  return (
    <PatientEncountersLayout>
      <Box
        d="flex"
        flexDir="column"
        borderRadius="3xl"
        borderColor="brand.darkPink"
        boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
        pt="8"
        backgroundColor="#fff"
      >
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5" background="primary.light" p="2" px="6">Patient Procedure</Heading>
        <Box p="4" px="6">
          <PatientProcedureForm />
          <PatientProcedureTable />

        </Box>
      </Box>
    </PatientEncountersLayout>
  );
}
