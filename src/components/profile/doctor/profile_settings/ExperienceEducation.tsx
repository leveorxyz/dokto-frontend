import { Box, Heading } from "@chakra-ui/react";
import ExperienceEducationForm from "../../../forms/doctor-profile-settings/experience-education";

const ExperienceEducation = () => (
  <Box>
    <Heading as="h2" fontWeight="600" fontSize="2xl" color="brand.dark">Your Experience</Heading>
    <ExperienceEducationForm />
  </Box>
);

export default ExperienceEducation;
