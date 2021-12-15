import {
  Heading,
  Box,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";
import doctorProfileAtom from "../../../atoms/doctorProfile";
import useProfile from "../../../hooks/profile/useProfile";
import LoadingPage from "../../../components/common/fallback/LoadingPage";

export default function Vitals() {
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
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5" background="primary.light" p="2" px="6">Vitals</Heading>
        <Box mt={-6}>
          <form>

            <Table variant="mytable" colorScheme="teal">
              <Thead />
              <Tbody>
                <Tr>
                  <Td>Reading Date/Time</Td>
                  <Td>lol</Td>

                </Tr>
                <Tr>
                  <Td>Height</Td>
                  <Td />

                </Tr>
                <Tr>
                  <Td>Weight</Td>
                  <Td />

                </Tr>
                <Tr>
                  <Td>Temperature</Td>
                  <Td />

                </Tr>
                <Tr>
                  <Td>Pulse</Td>
                  <Td />

                </Tr>
                <Tr>
                  <Td>Respiratory rate</Td>
                  <Td />

                </Tr>
                <Tr>
                  <Td>O2 Saturation</Td>
                  <Td />

                </Tr>
                <Tr>
                  <Td>Pain</Td>
                  <Td />

                </Tr>
                <Tr>
                  <Td>BMI</Td>
                  <Td />

                </Tr>
                <Tr>
                  <Td>Blood pressure</Td>
                  <Td />

                </Tr>

              </Tbody>

            </Table>
          </form>

        </Box>
      </Box>

    </PatientEncountersLayout>
  );
}
