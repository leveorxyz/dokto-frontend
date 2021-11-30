import { useRecoilValue } from "recoil";
import {
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";

import doctorProfile from "../../../atoms/doctorProfile";

export default function Tab2() {
  const doctorProfileData = useRecoilValue(doctorProfile);
  console.log(doctorProfileData);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const times = ["9:00am", "9:30am", "10:00am", "10:30am", "11:00am", "11:30am", "12:00pm"];

  return (
    <Box>
      <Heading as="h3" size="md" mb={3}>
        Available Hours:
      </Heading>
      <Flex direction="column">
        {days
          .map((day) => (
            <Flex direction="row" key={day} my="4" alignItems="center">
              <Box color="brand.dark">{day}</Box>
              {times
                .map((time) => (
                  <Box key={time} border="2px" borderColor="brand.dark" borderRadius="md" color="brand.dark" mx="4" p="1">{time}</Box>
                ))}
            </Flex>
          ))}
      </Flex>
    </Box>
  );
}
