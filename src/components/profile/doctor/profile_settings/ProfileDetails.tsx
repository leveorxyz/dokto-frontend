import React from "react";
import {
  Box, Heading, Flex, Image,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import ProfileDetailsForm from "../../../forms/profile-details";
import doctorProfileAtom from "../../../../atoms/doctorProfile";
import editIcon from "../../../../static/edit_image.svg";

const ProfileDetails = () => {
  const doctorProfile = useRecoilValue(doctorProfileAtom);
  return (
    <Box>
      <Heading as="h2" fontWeight="600" fontSize="2xl" color="brand.dark">Your Details</Heading>
      <Flex direction="row" alignItems="center" py="12" px="6">
        <Image src={doctorProfile?.profile_photo} fit="contain" w="20%" rounded="full" mr="12" />
        <Box as="button" bgColor="brand.darkPink" color="white" p="2.5" rounded="lg" h="10%" d="flex" alignItems="center">
          <Box mr="3">Edit Image</Box>
          <Image src={editIcon} />
        </Box>
      </Flex>
      <ProfileDetailsForm />
    </Box>
  );
};

export default ProfileDetails;
