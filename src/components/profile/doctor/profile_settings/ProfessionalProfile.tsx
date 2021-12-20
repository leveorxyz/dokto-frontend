import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import ProfessionalProfileForm from "../../../forms/doctor-profile-settings/professional-profile";

const ProfessionalProfile = () => (
  <Box>
    <Heading as="h2" fontWeight="600" fontSize="2xl" color="brand.dark">Professional Profile</Heading>
    <ProfessionalProfileForm />
  </Box>
);

export default ProfessionalProfile;
