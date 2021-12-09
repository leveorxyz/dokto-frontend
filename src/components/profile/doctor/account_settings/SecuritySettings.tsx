import { Box, Heading } from "@chakra-ui/react";
import SecuritySettingsForm from "../../../forms/account-settings-forms/security-settings";

const SecuritySettings = () => (
  <Box>
    <Heading as="h2" fontWeight="600" fontSize="2xl" color="brand.dark">Security Settings</Heading>
    <SecuritySettingsForm />
  </Box>
);

export default SecuritySettings;
