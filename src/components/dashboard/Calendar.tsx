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

export default function Calendar() {
  const {
    cursorDate, headers, body, navigation,
  } = useCalendar({
    defaultWeekStart: 1,
  });
  const yyMM = format(cursorDate, "yy-MM");

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

                return (
                  <Td
                    key={dayKey}
                    opacity={isCurrentMonth ? 1 : 0.2}
                    p={2}
                  >
                    {isCurrentDate ? (
                      <Text
                        fontWeight={300}
                        color="primary.light"
                      >
                        <time
                          dateTime={`${yyMM}-${String(date).padStart(
                            2,
                            "0",
                          )}`}
                        >
                          {date}
                        </time>
                      </Text>
                    ) : (
                      <Text fontWeight={300} color={isWeekend ? "gray.300" : "white"}>
                        <time
                          dateTime={`${yyMM}-${String(date).padStart(
                            2,
                            "0",
                          )}`}
                        >
                          {date}
                        </time>
                      </Text>
                    )}
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
