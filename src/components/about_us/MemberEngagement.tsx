import React from "react";
import { Box, Heading, Divider } from "@chakra-ui/react";
import MemberPie from "./MemberPie";
import { SpacedContainer } from "../common/Containers";

const DividerLine = () => (
  <Divider
    orientation="vertical"
    h="20rem"
    px="10"
    display={{
      sm: "none", md: "block", lg: "block", xl: "block", base: "none",
    }}
  />
);

const MemberEngagementDoctor = () => (
  <SpacedContainer py={24}>
    <Heading as="h2" fontWeight="bold" fontSize="4xl" mb="4">Putting Our Patients &amp; Providers First</Heading>
    <Box mb="16" fontSize="lg" color="gray">Dokto is a global Telehealth service that gives patients the opportunity to connect with licensed doctors, therapists, practitioners and specialists for on-demand, online medical consultations. Our aim is to offer convenience and access, providing premium healthcare at a time, location and platform that is suitable for both provider and patient.</Box>
    <Box
      d="flex"
      flexDir={{
        sm: "column", md: "row", lg: "row", xl: "row", base: "column",
      }}
      borderColor="#bfbfbf"
    >
      {[...Array(4).keys()].map(
        (idx) => (
          <React.Fragment key={idx}>
            <Box flex="1" mb="4">
              <MemberPie />
            </Box>
            {idx !== 3 && <DividerLine />}
          </React.Fragment>
        ),
      )}
    </Box>
  </SpacedContainer>

);
export default MemberEngagementDoctor;
