import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

type PropTypes = {
  icon: string | React.ReactNode;
  title: string | React.ReactNode;
}

export default function IconCard({ icon, title }: PropTypes) {
  const marginY = {
    sm: "50", md: "120", lg: "120", xl: "120", base: "50",
  };

  return (
    <Box w="100%" height="100%" border="1px" borderColor="gray.300" bg="white">
      <Flex direction="column" alignItems="center" py={marginY} px="1">
        {icon}
        <Text fontSize="4xl" textAlign="center" color="#170041">
          {title}
        </Text>
      </Flex>
    </Box>
  );
}
