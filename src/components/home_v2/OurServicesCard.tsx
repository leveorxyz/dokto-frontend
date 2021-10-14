import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

type PropTypes = {
  icon: React.ReactNode;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
}

const OurServicesCard = ({ icon, title, description }: PropTypes) => {
  const marginY = {
    sm: "50", md: "120", lg: "120", xl: "120", base: "50",
  };

  return (
    <div>
      <Box w="100%" height="100%" bg="white">
        <Flex direction="column" py={marginY} px="1">
          {icon}
          <Text fontSize="xl">
            {title}
          </Text>
          <Text fontSize="md" color="gray">
            {description}
          </Text>
        </Flex>
      </Box>
    </div>
  );
};

export default OurServicesCard;
