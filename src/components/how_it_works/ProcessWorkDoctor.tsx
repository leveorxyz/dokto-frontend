import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import TimelineWorkDoctor from "./TimelineWorkDoctor";

const ProcessWorkDoctor = () => {
  const marginX = {
    sm: "6", md: "32", lg: "32", xl: "32", base: "6",
  };

  return (
    <div>
      <Box px={marginX} w="100%" py="20">
        <Box>
          <Heading as="h2" fontWeight="bold" fontSize="3xl" mb="4">Our Process</Heading>
          <Heading as="h4" fontSize="2xl" mb="4" color="skyblue" fontWeight="normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Heading>
          <TimelineWorkDoctor />
        </Box>
      </Box>
    </div>
  );
};

export default ProcessWorkDoctor;
