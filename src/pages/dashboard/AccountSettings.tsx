import {
  Heading, Box,
  Divider,
} from "@chakra-ui/react";
import { SpacedContainer } from "../../components/common/Containers";

import AccountSettingsTabs from "../../components/profile/doctor/account_settings/AccountSettingsTabs";
import accountSettingsAtom from "../../atoms/dashboard/accountSettings.atom";
import useAccountSettings from "../../hooks/account-settings/useAccountSettings";
import LoadingPage from "../../components/common/fallback/LoadingPage";
import MessagePage from "../../components/common/fallback/MessagePage";

const AccountSettings = () => {
  const { isLoading, isError, error } = useAccountSettings(accountSettingsAtom);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as any).message} />;
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
