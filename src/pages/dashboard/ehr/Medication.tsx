import {
  Heading,
  Box,
} from "@chakra-ui/react";
import MedicationTable from "../../../components/common/medication";
import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";
import MedicationForm from "../../../components/forms/medication";

export default function Medication() {
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
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5" background="primary.light" p="2" px="6">Medication</Heading>
        <Box p="4" px="6">
          <MedicationForm />
          <MedicationTable />

        </Box>
      </Box>
    </PatientEncountersLayout>
  );
}
