import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

type PropTypes = {
  icon: string | React.ReactNode;
  title: string | React.ReactNode;
}

export default function CardDashboardHome({ icon, title }: PropTypes) {
  const marginY = {
    sm: "50", md: "120", lg: "120", xl: "120", base: "50",
  };

  return (
    <Box
      w="100%"
      height="100%"
      bg="white"
      borderRadius="3xl"
      cursor="pointer"
      _hover={{ boxShadow: "0 10px 30px 0 rgb(205 204 219 / 25%)", filter: "drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))" }}
    >
      <Flex direction="column" alignItems="center" py={marginY} px="1">
        {icon}
        <Text fontSize="xl" textAlign="center" color="#11142D" mt="4">
          {title}
        </Text>
      </Flex>
    </Box>
  );
}
