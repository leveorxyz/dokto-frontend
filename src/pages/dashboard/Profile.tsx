import {
  Heading,
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import { SpacedContainer } from "../../components/common/Containers";
import ProfileIcon from "../../static/user.svg";
import ProfileTabs from "../../components/profile/doctor/ProfileTabs";
import BrandButton from "../../components/common/buttons/BrandButton";
import WhiteButton from "../../components/common/buttons/WhiteButton";
import doctorProfileAtom from "../../atoms/doctorProfile";
import useProfile from "../../hooks/profile/useProfile";
import LoadingPage from "../../components/common/fallback/LoadingPage";

export default function Profile() {
  const doctorProfile = useRecoilValue(doctorProfileAtom);
  const { isLoading } = useProfile("doctor", doctorProfileAtom);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <SpacedContainer>
      <Flex alignItems="center" direction="row">
        <Image src={ProfileIcon} position="relative" top="2" right="1" />
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mt="4">Profile</Heading>
      </Flex>
      <Box display="flex" py={8}>
        <Image src={doctorProfile?.profile_photo} width="12rem" fit="contain" mr={6} />
        <Box w="100%" mb="10" d="flex" flexDir="column">
          <Heading as="h3" fontSize="3xl" fontWeight={700} color="primary.dark">{doctorProfile?.full_name}</Heading>
          <Heading as="h4" fontSize="xl" fontWeight={400} color="brand.darkPink" mb={3}>{doctorProfile?.qualification_suffix}</Heading>
          <Box color="gray.500" mb={3}>
            No reviews yet.
          </Box>
          <Text fontSize="lg" color="gray.500">
            {doctorProfile?.professional_bio}
          </Text>
          <Box d="flex" flexDir="row" mt="3">
            <BrandButton>Add Review</BrandButton>
            <WhiteButton ml="5">Book Now</WhiteButton>
          </Box>
        </Box>
      </Box>
      <ProfileTabs />
    </SpacedContainer>
  );
}
