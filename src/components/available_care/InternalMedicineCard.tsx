import { Heading, Box } from "@chakra-ui/react";
import { FaRegCircle } from "react-icons/fa";
import React from "react";

type PropTypes = {
  title: string;
  data: string;
};

const InternalMedicineCard = ({ title, data }: PropTypes) => (
  <div>
    <Box
      bg="white"
      d="flex"
      p="10"
      flexDir="column"
      justify="center"
      align="center"
      maxW="100%"
    >
      <Box
        d="flex"
        flexDir="row"
        alignItems="center"
        mb="2"
      >
        <FaRegCircle size="50" />
        <Heading as="h2" ml="2" fontWeight="bold" fontSize="2xl">{title}</Heading>
      </Box>
      <Box>{data}</Box>
    </Box>
  </div>
);

export default InternalMedicineCard;
