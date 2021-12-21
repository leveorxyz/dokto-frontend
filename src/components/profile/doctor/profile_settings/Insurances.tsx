import { Box, Heading } from "@chakra-ui/react";

import { useProfileSettings, ProfileSettingsURLs } from "../../../../hooks/profile-settings/useProfileSettings";
import profileSettingsAtom from "../../../../atoms/dashboard/doctorProfileSettings.atom";
import MessagePage from "../../../common/fallback/MessagePage";
import LoadingPage from "../../../common/fallback/LoadingPage";
import InsurancesForm from "../../../forms/doctor-profile-settings/insurances";

const Insurances = () => {
  const {
    isLoading, isSuccess, isError, error,
  } = useProfileSettings(ProfileSettingsURLs.insurance, profileSettingsAtom);

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
        <InsurancesForm />
      </Box>
    );
  }

  return <></>;
};

export default Insurances;
