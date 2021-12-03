import { Button, Flex } from "@chakra-ui/react";
import faker from "faker";
import { Column } from "react-table";
import { PatientEncounters } from "../atoms/ehr/patientEncounters";

export const dummyPatientEncounters: PatientEncounters[] = new Array(5).fill(null)
  .map(() => ({
    date: faker.date.past().toDateString(),
    code: faker.lorem.word(),
    description: faker.lorem.paragraph(3),
    status: faker.random.arrayElement(["Active", "Inactive"]),
  }));

export const columns: Column<PatientEncounters>[] = [
  {
    Header: "",
    accessor: "date",
  },
  {
    Header: "",
    accessor: "code",
    Cell: ({ value }) => `ICU: ${value}`,
  },
  {
    Header: "",
    accessor: "description",
  },
  {
    Header: "",
    accessor: "status",
    Cell: ({ value }) => `Status: ${value}`,
  },
  {
    Header: "",
    accessor: "status",
    Cell: () => (
      <Flex>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Flex>
    ),
  },

];

export default { dummyPatientEncounters, columns };
