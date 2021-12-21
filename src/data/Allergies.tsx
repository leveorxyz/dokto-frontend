import {
  Box, Flex, IconButton,
} from "@chakra-ui/react";
import faker from "faker";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Column } from "react-table";
import format from "date-fns/format";
import { Allergies } from "../atoms/ehr/allergies";

export const dummyAllergies: Allergies[] = new Array(5).fill(null)
  .map(() => ({
    date: faker.date.past().toDateString(),
    allergy: faker.lorem.word(),
    serverity: faker.lorem.word(3),
    status: faker.random.arrayElement(["Active", "Inactive"]),
    action: "",
  }));

export const columns: Column<Allergies>[] = [
  {
    Header: "",
    accessor: "date",
    Cell: ({ value }:any) => (
      <Flex>
        <Box color="#0029FF" whiteSpace="nowrap">
          {format(new Date(value), "MMM dd, yyyy")}
        </Box>
      </Flex>
    ),
  },
  {
    Header: "",
    accessor: "allergy",
    Cell: ({ value }:any) => (
      <Flex>
        <Box color="#0029FF" mr="4px">Allergy: </Box>
        {" "}
        {value}
      </Flex>
    ),
  },
  {
    Header: "",
    accessor: "serverity",
    Cell: ({ value }:any) => (
      <Box>
        <Box as="span" color="#0029FF" mr="4px">Serverity: </Box>
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
    Cell: ({ value }:any) => (
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

export default { dummyAllergies, columns };
