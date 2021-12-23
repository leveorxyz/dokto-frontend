import { useEffect, useState, useMemo } from "react";
import {
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import LoadingPage from "../../../common/fallback/LoadingPage";
import MessagePage from "../../../common/fallback/MessagePage";
import AvailableHoursAtom, { AvailableHours } from "../../../../atoms/availableHours.atom";
import useAvailableHours from "../../../../hooks/profile/useAvailableHours";

const AvailableHourButton = ({ time }: { time: string }) => (
  <Box
    as="button"
    key={time}
    border="2px"
    borderColor="brand.dark"
    borderRadius="md"
    w="90px"
    color="brand.dark"
    mx="4"
    my="1"
    p="1"
    cursor="pointer"
    _hover={{ color: "white", bgColor: "brand.darkPink", borderColor: "brand.darkPink" }}
    _focus={{ color: "white", bgColor: "brand.darkPink" }}
    _active={{ color: "white", bgColor: "brand.darkPink" }}
  >
    {time}
  </Box>
);

type WorkingHours = Record<
  string,
  {
    startTime: string;
    endTime: string;
  } | null
>;

export default function AvailableHoursTab() {
  const weekDays = useMemo(() => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], []);
  const [workingHours, setWorkingHours] = useState<WorkingHours | null>();

  const availableHours = useRecoilValue<AvailableHours[]>(AvailableHoursAtom);
  const {
    isSuccess, isError, error,
  } = useAvailableHours();

  useEffect(
    () => {
      if (isSuccess) {
        setWorkingHours(
          weekDays.reduce(
            (acc, curr) => {
              const day = availableHours.find((x) => x.day_of_week === curr);
              if (day) {
                return ({
                  ...acc,
                  [curr]: {
                    startTime: day.start_time,
                    endTime: day.end_time,
                  },
                });
              }
              return ({
                ...acc,
                [curr]: null,
              });
            },
            {},
          ),
        );
      }
    },
    [isSuccess, availableHours, weekDays],
  );

  if (isError) return <MessagePage status="error" title="Oops!" message={(error as any).message} />;

  if (isSuccess) {
    return (
      <Box>
        <Heading as="h3" size="md" mb={3}>
          Available Hours:
        </Heading>
        <Flex direction="column">
          {Object.entries(workingHours || {})
            .map(([day, hours]) => (
              <Flex direction="row" key={day} my="4">
                <Box color="brand.dark" w="25%">{day}</Box>
                <Box w="75%">
                  {(availableHours.find((item) => item.day_of_week === day)) ? (
                    <AvailableHourButton
                      key={`${hours?.startTime} - ${hours?.endTime}`}
                      time={`${hours?.startTime} - ${hours?.endTime}`}
                    />
                  ) : (
                    <Box
                      color="red"
                      mx="4"
                      p="1"
                    >
                      Closed
                    </Box>
                  )}
                </Box>
              </Flex>
            ))}
        </Flex>
      </Box>
    );
  }

  return <LoadingPage />;
}
