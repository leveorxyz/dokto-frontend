import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";

const encountersData = [
  {
    url: "/patients/vitals",
    title: "Vitals",
  },
  {
    url: "/patients/functional-and-cognitive-status",
    title: "Functional And Cognitive Status",
  },
  {
    url: "/patients/chief-complaints-and-HPI",
    title: "Chief Complaints and HPI",
  },
  {
    url: "/patients/plan-of-care",
    title: "Plan of Care",
  },
  {
    url: "/patients/assessment-and-diagnosis",
    title: "Assessment and Diagnosis",
  },
  {
    url: "/patients/patient-procedure",
    title: "Patient Procedure",
  },
];

const PatientEncounters = () => (
  <PatientEncountersLayout>
    <Box bgColor="white" pb={6}>
      {encountersData.map(
        ({ url, title }) => (
          <Box
            key={url}
            mb={6}
          >
            <ChakraLink
              as={Link}
              to={url}
              _hover={{ textDecoration: "none" }}
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                bgColor="primary.light"
                py={1}
                px={6}
                fontWeight="semibold"
              >
                <Box>{title}</Box>
                <Flex alignItems="center" color="brand.darkPurple">
                  <Box
                    as={FiEdit}
                    size="1.2rem"
                    mr={2}
                  />
                  <Box>Edit</Box>
                </Flex>
              </Flex>
            </ChakraLink>

            <Box
              minH="8rem"
              borderBottomRadius="lg"
              borderWidth={1}
              borderTopWidth={0}
              borderColor="brand.darkPurple"
              p={6}
            >
              No result found
            </Box>
          </Box>
        ),
      )}
    </Box>
  </PatientEncountersLayout>
);

export default PatientEncounters;
