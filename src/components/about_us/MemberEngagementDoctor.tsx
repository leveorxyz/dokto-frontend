import React from "react";
import { Box, Heading, Divider } from "@chakra-ui/react";
import MemberPie from "./MemberPie";

const MemberEngagementDoctor = () => {
  const marginX = {
    sm: "6", md: "32", lg: "32", xl: "32", base: "6",
  };

  const dividerDisplay = {
    sm: "none", md: "block", lg: "block", xl: "block", base: "none",
  };

  return (
    <div>
      <Box px={marginX} w="100%" py="10">
        <Heading as="h2" fontWeight="bold" fontSize="4xl" mb="4">Dokto Member Engagement</Heading>
        <Box mb="16" fontSize="lg" color="gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu enim vitae metus consectetur dictum vitae vel arcu. Nam rhoncus lacus vel fermentum posuere. Donec molestie sodales justo, sed fermentum diam finibus eu. Vestibulum vel ex id justo viverra interdum. Nunc id dictum orci. Morbi efficitur, mi nec pharetra maximus, est ligula finibus urna, vitae condimentum augue libero sed tellus. Nulla facilisi. Curabitur et commodo sapien. Aliquam cursus maximus elementum. Vivamus at interdum massa, non tempus arcu. Praesent elementum in ante a molestie.</Box>
        <Box
          d="flex"
          flexDir={{
            sm: "column", md: "row", lg: "row", xl: "row", base: "column",
          }}
          borderColor="#bfbfbf"
        >
          <Box flex="1" mb="4">
            <MemberPie />
          </Box>
          <Divider orientation="vertical" h="20rem" px="10" display={dividerDisplay} />
          <Box flex="1" mb="4">
            <MemberPie />
          </Box>
          <Divider orientation="vertical" h="20rem" px="10" display={dividerDisplay} />
          <Box flex="1" mb="4">
            <MemberPie />
          </Box>
          <Divider orientation="vertical" h="20rem" px="10" display={dividerDisplay} />
          <Box flex="1" mb="4">
            <MemberPie />
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default MemberEngagementDoctor;
