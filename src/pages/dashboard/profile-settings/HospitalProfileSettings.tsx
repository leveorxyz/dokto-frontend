/* eslint-disable no-lone-blocks */
import React from "react";
import {
  Heading,
  Box,
  Link as ChakraLink,
  Flex,
  Divider,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { SpacedContainer } from "../../../components/common/Containers";
import ProfileSettingsTabs from "../../../components/profile/hospital/profile_settings/ProfileSettingsTabs";
import hospitalProfileAtom from "../../../atoms/hospitalProfile";
import useHospitalProfile from "../../../hooks/profile-settings/useHospitalProfile";
import LoadingPage from "../../../components/common/fallback/LoadingPage";

const HospitalProfileSettings = () => {
  const { isLoading } = useHospitalProfile("clinic", hospitalProfileAtom);

  if (isLoading) {
    return <LoadingPage />;
  }

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
};

export default HospitalProfileSettings;
