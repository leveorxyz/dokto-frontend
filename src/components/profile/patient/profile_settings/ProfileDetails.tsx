import React from "react";
import {
  Box, Heading,
} from "@chakra-ui/react";
import ProfileDetailsForm from "../../../forms/patient-dashboard/profile-details";

const ProfileDetails = () => (
  <Box>
    <Heading as="h2" fontWeight="600" fontSize="2xl" color="brand.dark">Your Details</Heading>
    <ProfileDetailsForm />
  </Box>
);

export default ProfileDetails;
