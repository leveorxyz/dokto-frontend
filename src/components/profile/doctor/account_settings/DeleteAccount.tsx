import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import DeleteAccountForm from "../../../forms/delete-account";

const DeleteAccount = () => (
  <Box>
    <Heading as="h2" fontWeight="600" fontSize="2xl" color="brand.dark">Delete Account</Heading>
    <DeleteAccountForm />
  </Box>
);

export default DeleteAccount;
