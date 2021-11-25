import {
  Heading,
  Box,
  Divider,
} from "@chakra-ui/react";

import { SpacedContainer } from "../../components/common/Containers";
import ProfileSettingsTabs from "../../components/profile/doctor/profile_settings/ProfileSettingsTabs";
import doctorProfileAtom from "../../atoms/doctorProfile";
import useProfile from "../../hooks/profile/useProfile";
import LoadingPage from "../../components/common/fallback/LoadingPage";

export default function Profile() {
  const { isLoading } = useProfile("doctor", doctorProfileAtom);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <SpacedContainer py={6} px={6}>
      <Box
        d="flex"
        flexDir="column"
        borderRadius="3xl"
        borderColor="brand.darkPink"
        boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
        filter="drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))"
      >
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5">Profile Settings</Heading>
        <Divider mb="5" />
        <ProfileSettingsTabs />
      </Box>
    </SpacedContainer>
  );
}
