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
      <Box>
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          Email:
        </Heading>
        {" "}
        {doctorProfileData?.email}
      </Box>
      <Box>
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          Contact No:
        </Heading>
        {" "}
        {doctorProfileData?.contact_no}
      </Box>
      <Box>
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          Gender:
        </Heading>
        {" "}
        {doctorProfileData?.gender}
      </Box>
      <Box>
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          Date of birth:
        </Heading>
        {" "}
        {doctorProfileData?.date_of_birth}
      </Box>
      <Box>
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          Address:
        </Heading>
        {" "}
        {doctorProfileData?.street}
      </Box>
      {doctorProfileData?.city && (
      <Box>
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          City:
        </Heading>
        {" "}
        {doctorProfileData?.city}
      </Box>
      )}
      {doctorProfileData?.state && (
      <Box>
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          State:
        </Heading>
        {" "}
        {doctorProfileData?.state}
      </Box>
      )}
      <Box>
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          Country:
        </Heading>
        {" "}
        {doctorProfileData?.country}
      </Box>
      {doctorProfileData?.education?.length && (
      <Box>
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          Education:
        </Heading>
        {" "}
        {doctorProfileData?.education.map(
          ({ college, year, course }, idx) => (
            <Box key={`${college}-${course}`} mb={3}>
              {`${idx + 1}. ${course} - ${college} - ${year}`}
            </Box>
          ),
        )}
      </Box>
      )}
      {doctorProfileData?.experience?.length && (
      <Box>
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          Experience:
        </Heading>
        {" "}
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
  );
}
