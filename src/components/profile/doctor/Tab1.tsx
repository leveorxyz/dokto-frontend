import { useRecoilValue } from "recoil";
import {
  Box,
  Heading,
  Grid,
} from "@chakra-ui/react";

import doctorProfile from "../../../atoms/doctorProfile";

export default function Tab1() {
  const doctorProfileData = useRecoilValue(doctorProfile);
  return (
    <Box>
      <Grid
        templateColumns={{
          sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)", base: "repeat(1, 1fr)",
        }}
      >
        <Box gridColumnStart={1} gridColumnEnd={2} d="flex" flexDir="column">
          <Box flex="1" d="flex" flexDir="row">
            <Heading display="inline-block" as="h3" size="md" mb={3} flex="1">
              Email:
            </Heading>
            <Box flex="1">{doctorProfileData?.email}</Box>
          </Box>
          <Box flex="1" d="flex" flexDir="row">
            <Heading display="inline-block" as="h3" size="md" mb={3} flex="1">
              Contact No:
            </Heading>
            <Box flex="1">{doctorProfileData?.contact_no}</Box>
          </Box>
          <Box flex="1" d="flex" flexDir="row">
            <Heading display="inline-block" as="h3" size="md" mb={3} flex="1">
              Gender:
            </Heading>
            <Box flex="1">{doctorProfileData?.gender}</Box>
          </Box>
          <Box flex="1" d="flex" flexDir="row">
            <Heading display="inline-block" as="h3" size="md" mb={3} flex="1">
              Date of birth:
            </Heading>
            <Box flex="1">{doctorProfileData?.date_of_birth}</Box>
          </Box>
          <Box flex="1" d="flex" flexDir="row">
            <Heading display="inline-block" as="h3" size="md" mb={3} flex="1">
              Address:
            </Heading>
            <Box flex="1">{doctorProfileData?.street}</Box>
          </Box>
          <Box flex="1" d="flex" flexDir="row">
            <Heading display="inline-block" as="h3" size="md" mb={3} flex="1">
              City:
            </Heading>
            <Box flex="1">
              {doctorProfileData?.city && (
              <Box>
                {doctorProfileData?.city}
              </Box>
              )}
            </Box>
          </Box>
          <Box flex="1" d="flex" flexDir="row">
            <Heading display="inline-block" as="h3" size="md" mb={3} flex="1">
              State:
            </Heading>
            <Box flex="1">
              {doctorProfileData?.state && (
              <Box>
                {doctorProfileData?.state}
              </Box>
              )}
            </Box>
          </Box>
          <Box flex="1" d="flex" flexDir="row">
            <Heading display="inline-block" as="h3" size="md" mb={3} flex="1">
              Country:
            </Heading>
            <Box flex="1">
              {doctorProfileData?.country}
            </Box>
          </Box>
          <Box flex="1" d="flex" flexDir="row">
            <Heading display="inline-block" as="h3" size="md" mb={3} flex="1">
              Education:
            </Heading>
            <Box flex="1">
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
            <Heading display="inline-block" as="h3" size="md" mb={3} flex="1">
              Experience:
            </Heading>
            <Box flex="1">
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
        <Box gridColumnStart={2} d="flex" flexDir="column" />
      </Grid>
    </Box>
  );
}
