import {
  Box, Heading, Stack, StackDivider,
} from "@chakra-ui/react";

import MemberPie from "./MemberPie";
import { SpacedContainer } from "../common/Containers";
import PieDescription from "./PieDescription";

const MemberEngagementDoctor = () => (
  <Box bg="gray.100">
    <SpacedContainer py={12}>
      <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="4">Putting Our Patients &amp; Providers First</Heading>
      <Box mb="16" fontSize="lg" color="#858585">
        Dokto is a global Telehealth service that gives patients the opportunity to connect
        with licensed doctors, therapists, practitioners and specialists for on-demand, online
        medical consultations. Our aim is to offer convenience and access, providing premium
        healthcare at a time, location and platform that is suitable for both
        provider and patient.
      </Box>
      <Stack direction={["column", "column", "row", "row", "row"]} spacing={12} divider={<StackDivider borderColor="gray.300" />}>
        {PieDescription.map(
          ({
            title, data, lParcentage, sParcentage,
          }) => (
            <MemberPie
              key={title}
              title={title}
              lParcentage={lParcentage}
              sParcentage={sParcentage}
              description={data}
            />
          ),
        )}
      </Stack>
    </SpacedContainer>
  </Box>
);

export default MemberEngagementDoctor;
