import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import SecuritySettingsForm from "../../../forms/security-settings";

const ProfileDetails = () => (
  <Box>
    <Heading as="h2" fontWeight="600" fontSize="2xl" color="brand.dark">Account Security &amp; Settings</Heading>
    <SecuritySettingsForm />
  </Box>
);

export default ProfileDetails;
