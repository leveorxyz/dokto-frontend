import React from "react";
import { IoBusiness } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Box } from "@chakra-ui/react";

const BusinessCard = () => {
  const marginY = {
    sm: "50", md: "120", lg: "120", xl: "120", base: "50",
  };

  return (
    <div>
      <Box w="100%" height="100%" border="1px" borderColor="gray.300" bg="white">
        <Box d="flex" flexDir="column" alignItems="center" py={marginY} px="1">
          <Box>
            <IconContext.Provider value={{ color: "#00ffff" }}>
              <IoBusiness size={180} />
            </IconContext.Provider>
          </Box>
          <Box mt="16" textAlign="center" d="flex" flexDir="row">
            <Box fontWeight="bold" fontSize="4xl" mr="2">3</Box>
            <Box fontWeight="normal" fontSize="4xl">Lines of Business</Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default BusinessCard;
