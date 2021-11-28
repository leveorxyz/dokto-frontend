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
      <Box d="flex">
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          Email:
        </Heading>
        <Box>{doctorProfileData?.email}</Box>
      </Box>
      <Box d="flex">
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          Contact No:
        </Heading>
        {" "}
        {doctorProfileData?.contact_no}
      </Box>
      <Box d="flex">
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          Gender:
        </Heading>
        {" "}
        {doctorProfileData?.gender}
      </Box>
      <Box d="flex">
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          Date of birth:
        </Heading>
        {" "}
        {doctorProfileData?.date_of_birth}
      </Box>
      <Box d="flex">
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          Address:
        </Heading>
        {" "}
        {doctorProfileData?.street}
      </Box>
      {doctorProfileData?.city && (
      <Box d="flex">
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          City:
        </Heading>
        {" "}
        {doctorProfileData?.city}
      </Box>
      )}
      {doctorProfileData?.state && (
      <Box d="flex">
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          State:
        </Heading>
        {" "}
        {doctorProfileData?.state}
      </Box>
      )}
      <Box d="flex">
        <Heading display="inline-block" as="h3" size="md" mb={3}>
          Country:
        </Heading>
        {" "}
        {doctorProfileData?.country}
      </Box>
      {doctorProfileData?.education?.length && (
      <Box d="flex">
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
      <Box d="flex">
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
