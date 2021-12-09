import {
  Box, Flex, IconButton,
} from "@chakra-ui/react";
import faker from "faker";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Column } from "react-table";
import { PatientEncounters } from "../atoms/ehr/patientEncounters";

export const dummyPatientEncounters: PatientEncounters[] = new Array(5).fill(null)
  .map(() => ({
    date: faker.date.past().toDateString(),
    code: faker.lorem.word(),
    description: faker.lorem.paragraph(3),
    status: faker.random.arrayElement(["Active", "Inactive"]),
    action: "",
  }));

export const columns: Column<PatientEncounters>[] = [
  {
    Header: "",
    accessor: "date",
    Cell: ({ value }:any) => (
      <Flex>
        <Box color="#0029FF" whiteSpace="nowrap">
          {value}
        </Box>
      </Flex>
    ),
  },
  {
    Header: "",
    accessor: "code",
    Cell: ({ value }:any) => (
      <Flex>
        <Box color="#0029FF" mr="4px">ICU: </Box>
        {" "}
        {value}
      </Flex>
    ),
  },
  {
    Header: "",
    accessor: "description",
    Cell: ({ value }:any) => (
      <Box>
        <Box as="span" color="#0029FF" mr="4px">Desc: </Box>
        {" "}
        {value}
      </Box>
    ),
  },
  {
    Header: "",
    accessor: "status",
    Cell: ({ value }:any) => (
      <Flex>
        <Box color="#0029FF" mr="4px">Status: </Box>
        {" "}
        {value}
      </Flex>
    ),
  },

  {
    Header: "",
    accessor: "action",
    Cell: () => (
      <Flex>
        <IconButton
          icon={<FiEdit size="24" color="#0029FF" />}
          backgroundColor="transparent"
          aria-label="mute-unmute"
          size="md"
          rounded="full"
        />
        <IconButton
          icon={<FiTrash2 size="24" color="#A42BAD" />}
          backgroundColor="transparent"
          aria-label="mute-unmute"
          size="md"
          rounded="full"
        />
      </Flex>
    ),
  },

];

export default { dummyPatientEncounters, columns };
