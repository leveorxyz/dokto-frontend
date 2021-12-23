import {
  Heading,
  Box,
  Flex,
  Divider,
} from "@chakra-ui/react";

import { SpacedContainer } from "../../../components/common/Containers";
import ProfileSettingsTabs from "../../../components/profile/patient/profile_settings/ProfileSettingsTabs";

import patientProfileSettingsAtom from "../../../atoms/patientProfileSettings";
import { useProfileSettings, ProfileSettingsURLs } from "../../../hooks/profile-settings/useProfileSettings";
import LoadingPage from "../../../components/common/fallback/LoadingPage";
import MessagePage from "../../../components/common/fallback/MessagePage";

const PatientProfileSettings = () => {
  const { isSuccess, isError, error } = useProfileSettings(
    ProfileSettingsURLs.patientProfileSettings,
    patientProfileSettingsAtom,
  );

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as {message: string}).message} />;
  }

  if (isSuccess) {
    return (
      <Box>
        <SpacedContainer py={10} mx={12}>
          <Box
            d="flex"
            flexDir="column"
            borderRadius="3xl"
            borderColor="brand.darkPink"
          >
            <Flex mb="5" justifyContent="space-between">
              <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark">Profile Settings</Heading>
            </Flex>
            <Divider mb="5" />
            <ProfileSettingsTabs />
          </Box>
        </SpacedContainer>
      </Box>
    );
  }

  return <LoadingPage />;
};

export default PatientProfileSettings;
