import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  Flex,
  Box,
  Heading,
  Avatar,
  Image,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import HospitalDetailsForm from "../../../forms/hospital-dashboard/hospital-details";
import profileAtom from "../../../../atoms/hospitalProfile";
import editIcon from "../../../../static/edit_image.svg";
import getBase64 from "../../../../utils/getBase64";

const ProfileDetails = () => {
  const [profileSettings, setProfileSettings] = useRecoilState(profileAtom);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState<string | null>(null);
  const [profilePhotoBase64, setProfilePhotoBase64] = useState<string | null>(null);

  useEffect(
    () => setProfileSettings(
      (prev) => (
        prev
          ? ({ ...prev, profile_photo: profilePhotoBase64 as string })
          : prev
      ),
    ),
    [profilePhotoBase64, setProfileSettings],
  );

  useEffect(() => setProfilePhotoUrl(profileSettings?.profile_photo ?? null), [profileSettings]);

  return (
    <Box>
      <Heading as="h2" fontWeight="600" fontSize="2xl" color="brand.dark">Your Hospital Details</Heading>
      <Flex direction="row" alignItems="center" py="12" px="6">
        <Avatar size="2xl" name={profileSettings?.full_name} src={profilePhotoUrl ?? ""} mr="10" />
        <Box as="form" transform="translateY(-20%)">
          <FormControl>
            <Input
              id="upload-photo"
              type="file"
              visibility="hidden"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.item(0);
                setProfilePhotoUrl((prev) => (file ? URL.createObjectURL(file) : prev));
                getBase64(file as File)
                  .then((base64) => setProfilePhotoBase64(base64 as string ?? null));
              }}
            />
            <FormLabel htmlFor="upload-photo">
              <Button
                bgColor="brand.darkPink"
                color="white"
                p="2.5"
                rounded="lg"
                h="10%"
                d="flex"
                alignItems="center"
                pointerEvents="none"
                _hover={{ opacity: ".85" }}
                _focus={{ outline: "none", opacity: ".85" }}
              >
                <Box mr="3">Edit Image</Box>
                <Image src={editIcon} />
              </Button>
            </FormLabel>
          </FormControl>
        </Box>
      </Flex>
      <HospitalDetailsForm />
    </Box>
  );
};

export default ProfileDetails;
