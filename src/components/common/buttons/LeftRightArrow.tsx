import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const LeftRightArrow = () => (
  <div>
    <Box d="flex" flexDir="row">
      <Button variant="ghost" _hover={{ color: "white" }} _active={{ color: "white" }}>
        <IconContext.Provider value={{ color: "purple" }}>
          <FaArrowLeft size={20} />
        </IconContext.Provider>
      </Button>
      <Button variant="ghost" _hover={{ color: "white" }} _active={{ color: "white" }}>
        <IconContext.Provider value={{ color: "purple" }}>
          <FaArrowRight size={20} />
        </IconContext.Provider>
      </Button>
    </Box>
  </div>
);

export default LeftRightArrow;
