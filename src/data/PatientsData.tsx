import faker from "faker";
import { Column } from "react-table";
import { Badge } from "@chakra-ui/react";

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
    Cell: ({ value }: { value: string}) => (
      <Badge
        // eslint-disable-next-line no-nested-ternary
        bgColor={value === "New Patient" ? "gray.100" : value === "Recovered" ? "rgba(143, 140, 255, 0.28)" : "rgba(255, 92, 0, 0.1)"}
        // eslint-disable-next-line no-nested-ternary
        color={value === "New Patient" ? "rgba(164, 43, 173, 1)" : value === "Recovered" ? "rgba(45, 40, 255, 1)" : "rgba(255, 92, 0, 1)"}
        variant="subtle"
        py={2}
        px={3}
        rounded="md"
      >
        {value}
      </Badge>
    ),
  },
];

export default { dummyPatients, columns };
