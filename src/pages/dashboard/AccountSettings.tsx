import React from "react";
import {
  Heading, Box,
  Divider,
} from "@chakra-ui/react";
import { SpacedContainer } from "../../components/common/Containers";

import AccountSettingsTabs from "../../components/profile/doctor/account_settings/AccountSettingsTabs";
import doctorProfileAtom from "../../atoms/doctorProfile";
import useProfile from "../../hooks/profile/useProfile";
import LoadingPage from "../../components/common/fallback/LoadingPage";

const AccountSettings = () => {
  const { isLoading } = useProfile("doctor", doctorProfileAtom);

  if (isLoading) {
    return <LoadingPage />;
  }
  return (
    <SpacedContainer py={10} mx={12}>
      <Box
        d="flex"
        flexDir="column"
        borderRadius="3xl"
        borderColor="brand.darkPink"
      >
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5">Account Settings</Heading>
        <Divider mb="5" />
        <AccountSettingsTabs />
      </Box>
    </SpacedContainer>
  );
};
export default AccountSettings;
