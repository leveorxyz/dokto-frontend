import { useRecoilValue } from "recoil";
import {
  Box,
} from "@chakra-ui/react";

import doctorProfile from "../../../atoms/doctorProfile";

export default function Tab1() {
  const doctorProfileData = useRecoilValue(doctorProfile);
  return (
    <Box>
      <Box d="flex" flexDir="column">
        <Box flex="1" d="flex" flexDir="row">
          <Box w="25%" fontSize="lg" mb={3} color="brand.dark">
            Bio:
          </Box>
          <Box w="75%" color="rgba(51, 51, 51, .5)">
            {doctorProfileData?.professional_bio}
          </Box>
        </Box>
        <Box flex="1" d="flex" flexDir="row" my={4}>
          <Box w="25%" fontSize="lg" mb={3} color="brand.dark">
            Education:
          </Box>
          <Box w="75%">
            {doctorProfileData?.education?.length && (
              <Box>
                {doctorProfileData?.education.map(
                  ({ college, year, course }) => (
                    <Box key={`${college}-${course}`} mb={3}>
                      <Box fontWeight="500">
                        {college}
                      </Box>
                      <Box>
                        {course}
                      </Box>
                      <Box color="rgba(51, 51, 51, .5)" my="2">
                        {year}
                      </Box>
                    </Box>
                  ),
                )}
              </Box>
            )}
          </Box>
        </Box>
        <Box flex="1" d="flex" flexDir="row">
          <Box w="25%" fontSize="lg" mb={3} color="brand.dark">
            Experience:
          </Box>
          <Box w="75%">
            {doctorProfileData?.experience?.length && (
              <Box>
                {doctorProfileData?.experience.map(
                  ({
                    establishment_name: establishmentName,
                    job_title: jobTitle,
                    job_description: jobDescription,
                    start_date: startDate,
                    end_date: endDate,
                  }) => (
                    <Box key={`${establishmentName}-${jobTitle}`} mb={3}>
                      <Box fontWeight="500">
                        {establishmentName}
                      </Box>
                      <Box>
                        {jobTitle}
                      </Box>
                      <Box color="rgba(51, 51, 51, .5)" my="2">
                        {`${startDate} - ${endDate}`}
                      </Box>
                      <Box>
                        {jobDescription}
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
