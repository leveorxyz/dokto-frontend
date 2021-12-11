import { Box, Heading } from "@chakra-ui/react";
import DeleteAccountForm from "../../../forms/account-settings-forms/delete-account";

const DeleteAccount = () => (
  <Box>
    <Heading as="h2" fontWeight="600" fontSize="2xl" color="brand.dark">Delete Your Account</Heading>
    <DeleteAccountForm />
  </Box>
);

export default DeleteAccount;
