import { useRecoilValue } from "recoil";
import {
  Box,
  Heading,
} from "@chakra-ui/react";

import doctorProfile from "../../../atoms/doctorProfile";

export default function Tab1() {
  const doctorProfileData = useRecoilValue(doctorProfile);
  return (
    <Box>
      <Box d="flex" flexDir="column">
        <Box flex="1" d="flex" flexDir="row">
          <Box w="25%" fontSize="lg" mb={3}>
            Bio:
          </Box>
          <Box color="rgba(51, 51, 51, .5)">
            {doctorProfileData?.professional_bio}
          </Box>
        </Box>
        <Box flex="1" d="flex" flexDir="row">
          <Box w="25%" fontSize="lg" mb={3}>
            Education:
          </Box>
          <Box>
            {doctorProfileData?.education?.length && (
              <Box>
                {doctorProfileData?.education.map(
                  ({ college, year, course }, idx) => (
                    <Box key={`${college}-${course}`} mb={3}>
                      {`${idx + 1}. ${course} - ${college} - ${year}`}
                    </Box>
                  ),
                )}
              </Box>
            )}
          </Box>
        </Box>
        <Box flex="1" d="flex" flexDir="row">
          <Box w="25%" fontSize="lg" mb={3}>
            Experience:
          </Box>
          <Box>
            {doctorProfileData?.experience?.length && (
              <Box>
                {doctorProfileData?.experience.map(
                  ({
                    establishment_name,
                    job_title,
                    job_description,
                    start_date,
                    end_date,
                  },
                  idx) => (
                    <Box key={`${establishment_name}-${job_title}`} mb={3}>
                      {`${idx + 1}. ${job_title}, ${establishment_name}`}
                      <Box pl={3}>
                        {`${start_date} - ${end_date}`}
                      </Box>
                      <Box pl={3}>
                        {job_description}
                      </Box>
                    </Box>
                  ),
                )}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
