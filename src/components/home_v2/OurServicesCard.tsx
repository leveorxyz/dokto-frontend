import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

type PropTypes = {
  icon: React.ReactNode;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
}

const OurServicesCard = ({ icon, title, description }: PropTypes) => (
  <div>
    <Box w="100%" height="100%">
      <Flex direction="column" px="1">
        {icon}
        <Text fontSize="xl" mt="4" mb="2">
          {title}
        </Text>
        <Text fontSize="md" color="gray">
          {description}
        </Text>
      </Flex>
    </Box>
  </div>
);

export default OurServicesCard;
