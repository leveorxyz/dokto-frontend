import { useRecoilValue } from "recoil";
import {
  Box,
  Heading,
  Badge,
} from "@chakra-ui/react";

import doctorProfile from "../../../atoms/doctorProfile";

export default function Tab3() {
  const doctorProfileData = useRecoilValue(doctorProfile);
  console.log(doctorProfileData);

  return (
    <Box>
      <Box>
        <Heading as="h3" size="md" mb={3}>
          Specialties:
        </Heading>
        {" "}
        {doctorProfileData?.specialty?.map(
          (specialty) => <Badge key={specialty} variant="subtle" colorScheme="purple" m={1} fontSize="1em">{specialty}</Badge>,
        )}
      </Box>
    </Box>
  );
}
