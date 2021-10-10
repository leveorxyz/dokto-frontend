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
    <Heading as="h2" fontWeight="bold" fontSize="4xl" mb="4">Dokto Member Engagement</Heading>
    <Box mb="16" fontSize="lg" color="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu enim vitae metus consectetur dictum vitae vel arcu. Nam rhoncus lacus vel fermentum posuere. Donec molestie sodales justo, sed fermentum diam finibus eu. Vestibulum vel ex id justo viverra interdum. Nunc id dictum orci. Morbi efficitur, mi nec pharetra maximus, est ligula finibus urna, vitae condimentum augue libero sed tellus. Nulla facilisi. Curabitur et commodo sapien. Aliquam cursus maximus elementum. Vivamus at interdum massa, non tempus arcu. Praesent elementum in ante a molestie.</Box>
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
