import { Box, Heading } from "@chakra-ui/react";

import ExperienceEducationForm from "../../../forms/doctor-profile-settings/experience-education";
import { useProfileSettings, ProfileSettingsURLs } from "../../../../hooks/profile-settings/useProfileSettings";
import profileSettingsAtom from "../../../../atoms/dashboard/doctorProfileSettings.atom";
import MessagePage from "../../../common/fallback/MessagePage";
import LoadingPage from "../../../common/fallback/LoadingPage";

const ExperienceEducation = () => {
  const {
    isLoading, isSuccess, isError, error,
  } = useProfileSettings(ProfileSettingsURLs.educationAndExperience, profileSettingsAtom);

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
        <ExperienceEducationForm />
      </Box>
    );
  }

  return <></>;
};

export default ExperienceEducation;
