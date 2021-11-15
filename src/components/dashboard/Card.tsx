import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

type PropTypes = {
  icon: string | React.ReactNode;
  title: string | React.ReactNode;
  path: string;
}

export default function CardDashboardHome({ icon, title, path }: PropTypes) {
  return (
    <Link to={path}>
      <Box
        w="100%"
        height="100%"
        bg="white"
        borderRadius="3xl"
        cursor="pointer"
        _hover={{
          boxShadow: "0 10px 30px 0 rgb(205 204 219 / 25%)",
          filter: "drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))",
        }}
      >
        <Flex
          direction="column"
          alignItems="center"
          py={{
            base: 12, sm: 12, md: 20, lg: 20, xl: 20,
          }}
        >
          {icon}
          <Text fontSize="xl" textAlign="center" color="#11142D" mt="4">
            {title}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
}
