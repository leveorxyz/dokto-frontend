import {
  Heading,
  Box,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import PatientEncountersLayout from "../../components/common/PatientEncountersLayout";
import { SpacedContainer } from "../../components/common/Containers";
import doctorProfileAtom from "../../atoms/doctorProfile";
import useProfile from "../../hooks/profile/useProfile";
import LoadingPage from "../../components/common/fallback/LoadingPage";

export default function Vitals() {
  const { isLoading } = useProfile("doctor", doctorProfileAtom);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <PatientEncountersLayout>
      <SpacedContainer>
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
            <Table variant="mytable" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th color="brand.darkPink" fontSize="16" backgroundColor="#BAFAF5">Vitals for this Encounter</Th>
                  <Th color="brand.darkPink" fontSize="16" backgroundColor="#BAFAF5">Date/ Time</Th>

                </Tr>
              </Thead>
              <Tbody>
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
          </Box>
        </Box>
      </SpacedContainer>

    </PatientEncountersLayout>
  );
}
