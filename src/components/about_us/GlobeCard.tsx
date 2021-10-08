import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Box } from "@chakra-ui/react";

const GlobeCard = () => (
  <div>
    <Box w="100%" height="100%" border="1px" borderColor="gray.300" bg="white">
      <Box d="flex" flexDir="column" alignItems="center" py="100" px="14">
        <IconContext.Provider value={{ color: "#00ffff" }}>
          <FaGlobeAfrica size={190} />
        </IconContext.Provider>
        <Box mt="10" d="flex" flexDir="row" flexWrap="wrap">
          <Box fontWeight="bold" fontSize="4xl" mr="2">497</Box>
          <Box fontWeight="normal" fontSize="4xl" mr="2">Countries across</Box>
          <Box fontWeight="bold" fontSize="4xl" mr="2">19</Box>
          <Box fontWeight="normal" fontSize="4xl">States</Box>
        </Box>
      </Box>
    </Box>
  </div>
);

export default GlobeCard;
