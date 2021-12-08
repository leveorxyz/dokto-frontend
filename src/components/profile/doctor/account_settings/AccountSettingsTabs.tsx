import React from "react";
import { Box } from "@chakra-ui/react";
import AccountSettingsForm from "../../../forms/account-settings";

export default function ProfileSettingsTabs() {
  return (
    <Box bgColor="white" p={6} rounded="xl">
      <AccountSettingsForm />
    </Box>
  );
}
