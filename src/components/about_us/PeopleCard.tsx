import React from "react";
import { IoIosPeople } from "react-icons/io";
import { IconContext } from "react-icons";
import { Box } from "@chakra-ui/react";

const PeopleCard = () => (
  <div>
    <Box w="100%" height="100%" border="1px" borderColor="gray.300" bg="white">
      <Box d="flex" flexDir="column" alignItems="center" py="120" px="14">
        <IconContext.Provider value={{ color: "#00ffff" }}>
          <IoIosPeople size={200} />
        </IconContext.Provider>
        <Box mt="10" textAlign="center" d="flex" flexDir="row">
          <Box fontWeight="bold" fontSize="4xl" mr="2">560,000</Box>
          <Box fontWeight="normal" fontSize="4xl">Members</Box>
        </Box>
      </Box>
    </Box>
  </div>
);

export default PeopleCard;
