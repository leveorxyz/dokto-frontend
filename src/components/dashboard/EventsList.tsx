import {
  Flex, Box, Avatar, Text,
} from "@chakra-ui/react";
import { CalendarEvent } from "./DashboardData/CalendarEvents";

type Props = {
  events: CalendarEvent[];
}

export default function EventsList({ events }: Props) {
  return (
    <Box>
      {events.map(
        ({
          id, type, doctorName, time, bgColor, textColor,
        }) => (
          <Flex
            key={id}
            wrap="nowrap"
            w="100%"
            bg={bgColor}
            color={textColor}
            p={3}
            rounded="lg"
            my={6}
            align="center"
          >
            <Avatar size="sm" name={doctorName} />
            <Box ml={2}>
              <Text fontSize="md" fontWeight={500}>
                {type}
              </Text>
              <Text fontSize="sm">
                {doctorName}
              </Text>
            </Box>
            <Box ml="auto">
              <Text fontSize="md" fontWeight={500}>
                {time}
              </Text>
            </Box>
          </Flex>
        ),
      )}
    </Box>
  );
}
