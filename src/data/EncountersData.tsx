import faker from "faker";
import { Column } from "react-table";

import { Encounters } from "../atoms/ehr/encounters";

export const dummyEncounters: Encounters[] = new Array(100).fill(null)
  .map(() => ({
    date: faker.date.past().toDateString(),
    provider: faker.name.findName(),
    location: faker.fake("{{address.streetAddress}} {{address.city}}, {{address.state}}"),
    reasonOfVisit: faker.lorem.sentence(),
    signed: faker.random.arrayElement([true, false]),
  }));

export const columns: Column<Encounters>[] = [
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Provider",
    accessor: "provider",
  },
  {
    Header: "Location",
    accessor: "location",
  },
  {
    Header: "Reason of Visit",
    accessor: "reasonOfVisit",
  },
  {
    Header: "Signed",
    accessor: "signed",
    Cell: ({ value }: { value: string}) => (value ? "Signed" : "Not Signed"),
  },
];

export default { dummyEncounters, columns };
