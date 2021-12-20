import {
  Box, Flex, IconButton,
} from "@chakra-ui/react";
import faker from "faker";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Column } from "react-table";
import format from "date-fns/format";
import { Medication } from "../atoms/ehr/medication";

export const dummyMedication: Medication[] = new Array(5).fill(null)
  .map(() => ({
    date: faker.date.past().toDateString(),
    secondCol: {
      prescription: faker.lorem.word(),
      refills: faker.lorem.word(),
      direction: faker.lorem.word(),
    },

    thirdCol: {
      status: faker.random.arrayElement(["Active", "Inactive"]),
      expires: faker.date.future().toDateString(),
      quantity: faker.random.alpha(),
    },

    action: "",
  }));

export const columns: Column<Medication>[] = [
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
    accessor: "secondCol",
    Cell: ({ value }:any) => (
      <Box>
        <Flex>
          <Box color="#0029FF" mr="4px">Prescription: </Box>
          {" "}

          {value.prescription}
        </Flex>
        <Flex>
          <Box color="#0029FF" mr="4px">Refills: </Box>
          {" "}
          {value.refills}

        </Flex>
        <Flex>
          <Box color="#0029FF" mr="4px">Direction: </Box>
          {" "}
          {value.direction}

        </Flex>
      </Box>
    ),
  },
  {
    Header: "",
    accessor: "thirdCol",
    Cell: ({ value }:any) => (

      <Box>
        <Flex>
          <Box color="#0029FF" mr="4px">Status: </Box>
          {" "}
          {value.status}
        </Flex>
        <Flex>
          <Box color="#0029FF" mr="4px">Expires: </Box>
          {" "}
          {value.expires}

        </Flex>
        <Flex>
          <Box color="#0029FF" mr="4px">Quantity: </Box>
          {" "}
          {value.quantity}

        </Flex>
      </Box>
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

export default { dummyMedication, columns };
