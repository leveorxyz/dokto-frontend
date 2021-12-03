import faker from "faker";
import { Column } from "react-table";
import { PatientEncounters } from "../atoms/ehr/patientEncounters";

export const dummyPatientEncounters: PatientEncounters[] = new Array(5).fill(null)
  .map(() => ({
    date: faker.date.past().toDateString(),
    code: faker.lorem.word(),
    description: faker.lorem.paragraph(3),
    status: "active",
  }));

export const columns: Column<PatientEncounters>[] = [
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Code",
    accessor: "code",
  },
  {
    Header: "Description",
    accessor: "description",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "",
    // accessor: "action",
    // Cell: ({ value }: { value: string}) => (value ? "Signed" : "Not Signed"),
  },
];

export default { dummyPatientEncounters, columns };
