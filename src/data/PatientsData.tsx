// import faker from "faker";
import { Column } from "react-table";
import { EncounteredPatient } from "../hooks/encounteredPatients/useEncounteredPatients";

// import { Patient } from "../atoms/ehr/patients";
import PatientStatus from "../components/patients/Status";

// export const dummyPatients: Patient[] = new Array(100).fill(null)
//   .map(() => ({
//     name: faker.name.findName(),
//     phoneNo: faker.phone.phoneNumber(),
//     address: faker.fake("{{address.streetAddress}} {{address.city}}, {{address.state}}"),
//     lastAppointment: faker.date.past().toDateString(),
//     reasonOfVisit: faker.lorem.sentence(),
//     status: faker.random.arrayElement(["New Patient", "Recovered", "In Treatment"]),
//   }));

export const columns: Column<EncounteredPatient>[] = [
  {
    Header: "Account ID",
    accessor: "display_id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Phone No",
    accessor: "phone_number",
  },
  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Last Appointment",
    accessor: "date",
  },
  {
    Header: "Reason of Visit",
    accessor: "description",
  },
  {
    Header: "Status",
    accessor: "patient_status",
    Cell: ({ value }: { value: string}) => <PatientStatus value={value} />,
  },
];

export default { columns };
