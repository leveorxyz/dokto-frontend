import faker from "faker";
import { Column } from "react-table";

import { Patient } from "../atoms/ehr/patients";

export const dummyPatients: Patient[] = new Array(100).fill(null)
  .map(() => ({
    name: faker.name.findName(),
    phoneNo: faker.phone.phoneNumber(),
    address: faker.fake("{{address.streetAddress}} {{address.city}}, {{address.state}}"),
    lastAppointment: faker.date.past().toDateString(),
    reasonOfVisit: faker.lorem.sentence(),
    status: faker.random.arrayElement(["New Patient", "Recovered", "In Treatment"]),
  }));

export const columns: Column<Patient>[] = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Phone No",
    accessor: "phoneNo",
  },
  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Last Appointment",
    accessor: "lastAppointment",
  },
  {
    Header: "Reason of Visit",
    accessor: "reasonOfVisit",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

export default { dummyPatients, columns };
