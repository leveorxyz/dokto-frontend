import React from "react";
import {
  Box, Heading, Flex, Image, Button,
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
        <Image src={doctorProfile?.profile_photo} fit="contain" w="15%" borderRadius="50%" mr="10" />
        <Button
          bgColor="brand.darkPink"
          color="white"
          p="2.5"
          rounded="lg"
          h="10%"
          d="flex"
          alignItems="center"
          _hover={{ opacity: ".85" }}
          _focus={{ outline: "none", opacity: ".85" }}
        >
          <Box mr="3">Edit Image</Box>
          <Image src={editIcon} />
        </Button>
      </Flex>
      <ProfileDetailsForm />
    </Box>
  );
};

export default ProfileDetails;
