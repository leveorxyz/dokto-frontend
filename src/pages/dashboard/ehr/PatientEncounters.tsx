import {
  Box,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  Avatar,
  Divider,
  chakra,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdFileDownload } from "react-icons/md";
import { IoPrintOutline } from "react-icons/io5";

import PatientEncountersLayout from "../../../components/common/PatientEncountersLayout";

const baseUrl = "/patients/encounters-data";

const encountersData = [
  {
    url: `${baseUrl}/vitals`,
    title: "Vitals",
  },
  {
    url: `${baseUrl}/functional-and-cognitive-status`,
    title: "Functional And Cognitive Status",
  },
  {
    url: `${baseUrl}/chief-complaints-and-HPI`,
    title: "Chief Complaints and HPI",
  },
  {
    url: `${baseUrl}/social-history`,
    title: "Social History",
  },
  {
    url: `${baseUrl}/plan-of-care`,
    title: "Plan of Care",
  },
  {
    url: `${baseUrl}/assessment-and-diagnosis`,
    title: "Assessment and Diagnosis",
  },
  {
    url: `${baseUrl}/patient-procedure`,
    title: "Patient Procedure",
  },
];

const PatientEncounters = () => {
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  return (
    <PatientEncountersLayout>
      <Box bgColor="white">
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          bgColor="primary.light"
          fontWeight="semibold"
          color="brand.darkPurple"
          py={1}
          px={6}
          mb={6}
        >
          <Box
            as={IoPrintOutline}
            size="1.5rem"
            mr={2}
          />
          <Box
            as={MdFileDownload}
            size="1.5rem"
          />
        </Flex>

        <Box py={12} px={24} bgColor="brand.lightCyan" mb={6}>
          <Flex
            alignItems="center"
            wrap="nowrap"
            mb={4}
          >
            <Avatar name="Lorem Ipsum" boxSize="8rem" ml="auto" />

            <Flex direction="column" alignItems="center" mr="auto" ml={24}>
              <Heading
                as="h2"
                fontSize="5xl"
                fontWeight="semibold"
                color="primary.dark"
                pb={2}
              >
                Lorem Ipsum
              </Heading>

              <Text pb={2}>
                <chakra.span>
                  Address:
                </chakra.span>
                <chakra.span color="brand.darkPink" pl={1}>
                  Lorem Ipsum, Lorem Ipsum, Lorem Ipsum
                </chakra.span>
              </Text>

              <Flex alignItems="center">
                <Text pr={4}>
                  <chakra.span>
                    Phone:
                  </chakra.span>
                  <chakra.span color="brand.darkPink" pl={1}>
                    Lorem Ipsum
                  </chakra.span>
                </Text>

                <Text>
                  <chakra.span>
                    Email:
                  </chakra.span>
                  <chakra.span color="brand.darkPink" pl={1}>
                    Lorem Ipsum
                  </chakra.span>
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Divider borderColor="primary.dark" />

          <Flex justifyContent="space-between" wrap="nowrap" mt={4}>
            <Box>
              <Text pb={2}>
                <chakra.span>
                  Patient Name:
                </chakra.span>
                <chakra.span color="brand.darkPink" pl={1}>
                  Lorem Ipsum
                </chakra.span>
              </Text>
              <Text pb={2}>
                <chakra.span>
                  DOB:
                </chakra.span>
                <chakra.span color="brand.darkPink" pl={1}>
                  Lorem Ipsum
                </chakra.span>
              </Text>
              <Text pb={2}>
                <chakra.span>
                  Address:
                </chakra.span>
                <chakra.span color="brand.darkPink" pl={1}>
                  Lorem Ipsum
                </chakra.span>
              </Text>
            </Box>

            <Box textAlign="right">
              <Text pb={2}>
                <chakra.span>
                  Provider Name:
                </chakra.span>
                <chakra.span color="brand.darkPink" pl={1}>
                  Lorem Ipsum
                </chakra.span>
              </Text>
              <Text pb={2}>
                <chakra.span>
                  Visit Date:
                </chakra.span>
                <chakra.span color="brand.darkPink" pl={1}>
                  Lorem Ipsum
                </chakra.span>
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box pb={6}>
          {encountersData.map(
            ({ url, title }) => (
              <Box
                key={url}
                mb={6}
              >
                <ChakraLink
                  as={Link}
                  to={`${url}/${id}`}
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
                  borderColor="brand.darkPink"
                  p={6}
                >
                  No result found
                </Box>
              </Box>
            ),
          )}
        </Box>
      </Box>
    </PatientEncountersLayout>
  );
};

export default PatientEncounters;
