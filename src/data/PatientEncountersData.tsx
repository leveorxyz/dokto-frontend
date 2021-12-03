import faker from "faker";
import { Column } from "react-table";
import { PatientEncounters } from "../atoms/ehr/patientEncounters";

export const dummyPatientEncounters: PatientEncounters[] = new Array(5).fill(null)
  .map(() => ({
    date: faker.date.past().toDateString(),
    code: faker.lorem.word(),
    description: faker.lorem.paragraph(3),
    status: "Status: Active",
  }));

export const columns: Column<PatientEncounters>[] = [
  {
    Header: "",
    accessor: "date",
  },
  {
    Header: "",
    accessor: "code",
  },
  {
    Header: "",
    accessor: "description",
  },
  {
    Header: "",
    accessor: "status",
  },

];

export default { dummyPatientEncounters, columns };
