import { Box, Heading } from "@chakra-ui/react";
import PasswordResetForm from "../../../forms/account-settings-forms/password-reset";

const PasswordReset = () => (
  <Box>
    <Heading as="h2" fontWeight="600" fontSize="2xl" color="brand.dark">Change Your Password</Heading>
    <PasswordResetForm />
  </Box>
);

export default PasswordReset;
