import { Box, Heading } from "@chakra-ui/react";

import LicenseForm from "../../../forms/hospital-dashboard/license";

const ProfessionalProfile = () => (
  <Box>
    <Heading as="h2" fontWeight="600" fontSize="2xl" color="brand.dark">License</Heading>
    <LicenseForm />
  </Box>
);

export default ProfessionalProfile;
