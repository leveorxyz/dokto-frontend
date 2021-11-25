import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import EmailNotificationForm from "../../../forms/email-notification";

const EmailNotification = () => (
  <Box>
    <Heading as="h2" fontWeight="600" fontSize="2xl" color="brand.dark">Manage Email Notifications</Heading>
    <EmailNotificationForm />
  </Box>
);

export default EmailNotification;
