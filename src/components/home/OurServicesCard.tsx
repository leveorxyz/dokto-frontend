import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

type PropTypes = {
  icon: string | React.ReactNode;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
}

const OurServicesCard = ({ icon, title, description }: PropTypes) => (
  <Box
    w="100%"
    p={6}
    height="100%"
    borderRadius="20"
    _hover={{ bg: "white", boxShadow: "0 10px 30px 0 rgb(205 204 219 / 25%)" }}
    cursor="pointer"
  >
    <Flex direction="column" px="1">
      {icon}
      <Text fontSize="xl" mt="4" mb="2" color="#333333">
        {title}
      </Text>
      <Text fontSize="md" color="rgba(51, 51, 51, 0.6)">
        {description}
      </Text>
    </Flex>
  </Box>
);

export default OurServicesCard;
