import React from "react";
import { Box } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const LeftRightArrow = () => (
  <div>
    <Box d="flex" flexDir="row">
      <Box mr="2">
        <IconContext.Provider value={{ color: "purple" }}>
          <FaArrowLeft size={20} />
        </IconContext.Provider>
      </Box>
      <Box>
        <IconContext.Provider value={{ color: "purple" }}>
          <FaArrowRight size={20} />
        </IconContext.Provider>
      </Box>
    </Box>
  </div>
);

export default LeftRightArrow;
