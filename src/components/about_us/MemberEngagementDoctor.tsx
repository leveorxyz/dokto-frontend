import React from "react";
import { Box, Heading, Grid } from "@chakra-ui/react";
import MemberPie from "./MemberPie";

const MemberEngagementDoctor = () => {
  const marginX = {
    sm: "6", md: "32", lg: "32", xl: "32", base: "6",
  };
  return (
    <div>
      <Box px={marginX} w="100%" py="10">
        <Heading as="h2" fontWeight="bold" fontSize="4xl" mb="4">Dokto Member Engagement</Heading>
        <Box mb="16" fontSize="lg" color="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu enim vitae metus consectetur dictum vitae vel arcu. Nam rhoncus lacus vel fermentum posuere. Donec molestie sodales justo, sed fermentum diam finibus eu. Vestibulum vel ex id justo viverra interdum. Nunc id dictum orci. Morbi efficitur, mi nec pharetra maximus, est ligula finibus urna, vitae condimentum augue libero sed tellus. Nulla facilisi. Curabitur et commodo sapien. Aliquam cursus maximus elementum. Vivamus at interdum massa, non tempus arcu. Praesent elementum in ante a molestie.</Box>
        <Grid
          templateColumns={{
            sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)", base: "repeat(1, 1fr)",
          }}
          gap={6}
        >
          <MemberPie />
          <MemberPie />
          <MemberPie />
          <MemberPie />
        </Grid>
      </Box>
    </div>
  );
};
export default MemberEngagementDoctor;
