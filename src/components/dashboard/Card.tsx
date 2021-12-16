import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Text,
} from "@chakra-ui/react";

type PropTypes = {
  icon: string | React.ReactNode;
  title: string | React.ReactNode;
  path: string;
}

export default function CardDashboardHome({ icon, title, path }: PropTypes) {
  return (
    <Box
      as={Link}
      to={path}
      d="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100%"
      w="100%"
    >
      <Box>
        {icon}
      </Box>
      <Box>
        <Text fontSize="xl" textAlign="center" color="#11142D" mt="4">
          {title}
        </Text>
      </Box>
    </Box>
  );
}
