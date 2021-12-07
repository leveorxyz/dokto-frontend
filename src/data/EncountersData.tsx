import { Box, Image } from "@chakra-ui/react";
import faker from "faker";
import { Column } from "react-table";
import signed from "../static/signed2.svg";
import unsigned from "../static/signed1.svg";

import { Encounters } from "../atoms/ehr/encounters";

export const dummyEncounters: Encounters[] = new Array(100).fill(null)
  .map(() => ({
    date: faker.date.past().toDateString(),
    provider: faker.name.findName(),
    location: faker.fake("{{address.streetAddress}} {{address.city}}, {{address.state}}"),
    reasonOfVisit: faker.lorem.sentence(),
    signed: faker.random.arrayElement([true, false]),
    diagnosticData: {
      disease: faker.lorem.word(),
      description: faker.lorem.sentence(),
      ICD: faker.lorem.word(),
      type: faker.lorem.word(),
      startDate: faker.date.past().toDateString(),
      endDate: faker.date.past().toDateString(),
      assessment: faker.lorem.sentence(),
      isPrimary: faker.random.arrayElement([true, false]),
    },
    medicalNotes: faker.lorem.paragraphs(3),
    socialHistory: {
      maritalData: {
        homeEnviroment: faker.lorem.sentence(),
        children: faker.random.arrayElement([1, 2, 3, 4]),
        occupation: faker.lorem.word(),
        highestEducation: faker.lorem.word(),
        sexualOrientation: faker.lorem.word(),
        genderIdentity: faker.lorem.word(),
      },
      tobaccoUssageData: {
        status: faker.lorem.word(),
        tobaccoType: faker.lorem.word(),
        cigsPerDay: faker.random.number(),
        yearsSmoked: faker.random.number(),
        quitDate: faker.date.past().toDateString(),
        tobaccoCessation: faker.lorem.sentence(),
      },
      riskFactorsData: {
        exercise: faker.lorem.sentence(),
        drugUse: faker.lorem.sentence(),
        exposure: faker.lorem.sentence(),
        seatbelts: faker.lorem.sentence(),
      },
      drinksData: {
        alcoholUsage: faker.lorem.sentence(),
        caffeineUsage: faker.lorem.sentence(),
        ETOHUsage: faker.lorem.sentence(),
      },
    },
  }));

export const columns: Column<Encounters>[] = [
  {
    Header: "Visit Date",
    accessor: "date",
    Cell: ({ value }:any) => (
      <Box as="span" color="#0029FF" mr="4px">
        {value}
      </Box>

    ),
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
    Cell: ({ value }: { value: string}) => (value ? <Image src={unsigned} />
      : <Image src={signed} />),
  },
  // {
  //   Header: "Action",
  //   accessor: "action",
  //   // Cell: ({ value }: { value: string}) => (value ? <Box h="5" w="5">{ signed }</Box> : "Not Signed"),
  // },
];

export default { dummyEncounters, columns };
