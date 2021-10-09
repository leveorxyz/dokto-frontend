import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Box } from "@chakra-ui/react";

const GlobeCard = () => {
  const marginY = {
    sm: "50", md: "120", lg: "120", xl: "120", base: "50",
  };

  return (
    <div>
      <Box w="100%" height="100%" border="1px" borderColor="gray.300" bg="white">
        <Box d="flex" flexDir="column" alignItems="center" py={marginY} px="1">
          <IconContext.Provider value={{ color: "#00ffff" }}>
            <FaGlobeAfrica size={180} />
          </IconContext.Provider>
          <Box
            mt="16"
            textAlign="center"
            d="flex"
            flexDir="row"
            flexWrap="wrap"
          >
            <Box fontWeight="bold" fontSize="4xl" mr="1">497</Box>
            <Box fontWeight="normal" fontSize="4xl" mr="1">Countries across</Box>
            <Box fontWeight="bold" fontSize="4xl" mr="1">19</Box>
            <Box fontWeight="normal" fontSize="4xl">States</Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default GlobeCard;
