import { Box, Heading } from "@chakra-ui/react";

import { useProfileSettings, ProfileSettingsURLs } from "../../../../hooks/profile-settings/useProfileSettings";
import profileSettingsAtom from "../../../../atoms/dashboard/doctorProfileSettings.atom";
import MessagePage from "../../../common/fallback/MessagePage";
import LoadingPage from "../../../common/fallback/LoadingPage";
import ProfessionalProfileForm from "../../../forms/doctor-profile-settings/professional-profile";

const ProfessionalProfile = () => {
  const {
    isLoading, isSuccess, isError, error,
  } = useProfileSettings(ProfileSettingsURLs.professionalProfile, profileSettingsAtom);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <MessagePage status="error" title="Oops!" message={(error as any).message} />;
  }

  if (isSuccess) {
    return (
      <Box>
        <Heading as="h2" fontWeight="600" fontSize="2xl" color="brand.dark">Professional Profile</Heading>
        <ProfessionalProfileForm />
      </Box>
    );
  }

  return <></>;
};

export default ProfessionalProfile;
