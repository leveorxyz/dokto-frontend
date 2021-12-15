import { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Flex,
  Image,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import ProfileDetailsForm from "../../../forms/profile-details";
import doctorProfileAtom from "../../../../atoms/doctorProfile";
import editIcon from "../../../../static/edit_image.svg";
import getBase64 from "../../../../utils/getBase64";

const ProfileDetails = () => {
  const [profilePhotoUrl, setProfilePhotoUrl] = useState<string | null>(null);
  // TODO [afia]: this base64 data is what we should send to the server when submitting the form
  const [profilePhotoBase64, setProfilePhotoBase64] = useState<string | null>(null);

  const doctorProfile = useRecoilValue(doctorProfileAtom);

  useEffect(() => setProfilePhotoUrl(doctorProfile?.profile_photo ?? null), [doctorProfile]);

  return (
    <Box>
      <Heading as="h2" fontWeight="600" fontSize="2xl" color="brand.dark">Your Details</Heading>
      <Flex direction="row" alignItems="center" py="12" px="6">
        <Image src={profilePhotoUrl ?? ""} fit="cover" boxSize="10rem" borderRadius="50%" mr="10" />
        <form>
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
        </form>
      </Flex>
      <ProfileDetailsForm />
    </Box>
  );
};

export default ProfileDetails;
