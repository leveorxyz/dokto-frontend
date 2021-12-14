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
      boxSize={["40vw", "40vw", "10rem", "15rem"]}
      m={6}
      bg="white"
      borderRadius="3xl"
      cursor="pointer"
      boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
      _hover={{
        filter: "drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))",
      }}
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
