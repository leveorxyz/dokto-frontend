import { useRecoilValue } from "recoil";
import {
  Box,
  Heading,
} from "@chakra-ui/react";

import doctorProfile from "../../../atoms/doctorProfile";

export default function Tab2() {
  const doctorProfileData = useRecoilValue(doctorProfile);
  console.log(doctorProfileData);

  return (
    <Box>
      <Box mt={6}>
        <Heading as="h3" size="md" mb={3}>
          Available hours:
        </Heading>
      </Box>
    </Box>
  );
}
