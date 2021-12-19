import {
  Flex,
  Box,
  Text,
  Avatar,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { IoTimeOutline, IoEllipsisHorizontal } from "react-icons/io5";

import DummyAppointments from "./DashboardData/DummyAppointments";

export default function Appointment() {
  return (
    <Box
      overflowY="scroll"
      maxHeight="60vh"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {DummyAppointments.map(({
        name, id, date, appointmentType,
      }) => (
        <Flex
          key={id}
          p={4}
          borderBottom="1px solid gray.100"
          wrap="nowrap"
        >
          <Avatar size="md" name={name} src={name} />
          <Box ml={4}>
            <Text color="brand.darkPink">{name}</Text>
            <Text color="black" mb={1}>{appointmentType}</Text>

            <Flex color="gray.500">
              <Icon as={IoTimeOutline} size="0.8rem" />
              <Text fontSize="sm">{date}</Text>
            </Flex>
          </Box>

          <IconButton
            ml="auto"
            variant="ghost"
            color="gray.300"
            _hover={{
              bg: "gray.100",
              color: "gray.500",
            }}
            icon={<IoEllipsisHorizontal size="1.5rem" />}
            aria-label={`View actions for appointment with ${name} on ${date}`}
          />
        </Flex>
      ))}
    </Box>
  );
}
