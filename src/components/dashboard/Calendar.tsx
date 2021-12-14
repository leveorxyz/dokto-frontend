import { useEffect, useMemo } from "react";
import {
  Flex,
  Box,
  IconButton,
  Stack,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import useCalendar from "@veccu/react-calendar";
import { format } from "date-fns";
import locale from "date-fns/locale/en-US";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { CalendarEvent } from "./DashboardData/CalendarEvents";

type Props = {
  events: CalendarEvent[];
};

const EventsIndicator = ({ events }: {events: CalendarEvent[]}) => (
  <Flex justify="center" align="center">
    {events?.map(
      ({ id, bgColor }) => (
        <Box
          key={id}
          boxSize="5px"
          rounded="full"
          bg={bgColor}
          mx="2px"
        />
      ),
    )}
  </Flex>
);

export default function Calendar({ events }: Props) {
  const {
    cursorDate, headers, body, navigation,
  } = useCalendar({
    defaultWeekStart: 1,
  });
  const yyMM = format(cursorDate, "yyyy-MM");

  const eventsByDate = useMemo(() => events.reduce(
    (acc: Record<string, CalendarEvent[]>, event: CalendarEvent) => {
      const date = format(new Date(event.date), "yyyy-MM-dd");
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(event);
      return acc;
    }, {},
  ), [events]);

  return (
    <Table variant="unstyled" size="xs" maxW="100%">

      <TableCaption placement="top">
        <Flex justify="space-between" alignItems="center" width="w.100" mb={1}>
          <Text fontSize="lg" data-testid="cursor-date" color="white">
            {format(cursorDate, "LLLL, yyyy")}
          </Text>
          <Stack direction="row" gutter={8}>
            <IconButton
              aria-label="button for navigating to prev calendar"
              icon={<Box as={IoChevronBack} color="primary.light" fontSize="1.2rem" />}
              bg="transparent"
              _hover={{
                bg: "transparent",
              }}
              onClick={navigation.toPrev}
            />
            <IconButton
              aria-label="button for navigating to next calendar"
              icon={<Box as={IoChevronForward} color="primary.light" fontSize="1.2rem" />}
              bg="transparent"
              _hover={{
                bg: "transparent",
              }}
              onClick={navigation.toNext}
            />
          </Stack>
        </Flex>
      </TableCaption>

      <Thead>
        <Tr>
          {headers.weekDays.map(({ key, value }) => (
            <Th key={key} p={1}>
              <Text
                fontSize="xs"
                fontWeight="400"
                color="white"
              >
                {format(value, "E", { locale })}
              </Text>
            </Th>
          ))}
        </Tr>
      </Thead>

      <Tbody>
        {body.value.map((week) => {
          const { key, value: days } = week;

          return (
            <Tr key={key}>
              {days.map((day) => {
                const {
                  key: dayKey,
                  date,
                  isCurrentDate,
                  isCurrentMonth,
                  isWeekend,
                } = day;

                const fullDate = `${yyMM}-${String(date).padStart(
                  2,
                  "0",
                )}`;

                return (
                  <Td
                    key={dayKey}
                    opacity={isCurrentMonth ? 1 : 0.4}
                    p={2}
                  >
                    <Flex direction="column" alignItems="center">
                      {isCurrentDate ? (
                        <Text
                          fontWeight={300}
                          color="primary.light"
                        >
                          <time
                            dateTime={fullDate}
                          >
                            {String(date).padStart(
                              2,
                              "0",
                            )}
                          </time>
                        </Text>
                      ) : (
                        <Text fontWeight={300} color={isWeekend ? "gray.300" : "white"}>
                          <time
                            dateTime={fullDate}
                          >
                            {date}
                          </time>
                        </Text>
                      )}

                      {eventsByDate[fullDate] && (
                        <EventsIndicator
                          events={eventsByDate[fullDate]}
                        />
                      )}
                    </Flex>
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>

    </Table>
  );
}
