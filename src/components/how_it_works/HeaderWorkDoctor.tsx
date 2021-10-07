import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const HeaderWorkDoctor = () => {
  const headingSize = {
    sm: "35", md: "70", lg: "70", xl: "70", base: "35",
  };
  const marginX = {
    sm: "6", md: "32", lg: "32", xl: "32", base: "6",
  };
  const marginY = {
    sm: "20", md: "44", lg: "44", xl: "44", base: "20",
  };

  return (
    <div>
      <Box w="100%" backgroundImage="https://source.unsplash.com/collection/42413461/500x300" backgroundRepeat="no-repeat" backgroundSize="cover" mb="50">
        <Heading fontSize={headingSize} fontWeight="bold" py={marginY} px={marginX}>How it Works</Heading>
      </Box>
    </div>
  );
};

export default HeaderWorkDoctor;
