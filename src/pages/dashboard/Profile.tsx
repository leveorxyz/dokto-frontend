import {
  Heading,
  Flex,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import { SpacedContainer } from "../../components/common/Containers";
import ProfileTabs from "../../components/profile/doctor/ProfileTabs";
import doctorProfileAtom from "../../atoms/doctorProfile";
import useProfile from "../../hooks/profile/useProfile";
import LoadingPage from "../../components/common/fallback/LoadingPage";
import ProfileRightRow from "../../components/profile/doctor/ProfileRightRow";
import BrandButton from "../../components/common/buttons/BrandButton";
import WhiteButton from "../../components/common/buttons/WhiteButton";

export default function Profile() {
  const doctorProfile = useRecoilValue(doctorProfileAtom);
  const { isLoading } = useProfile("doctor", doctorProfileAtom);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <SpacedContainer py={6}>
      <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark">Profile</Heading>
      <Flex direction="row">
        <Flex wrap="wrap" py={12} alignItems="flex-start" direction="column" w="90%" pr={[0, 0, 20, 20]}>
          <Image src={doctorProfile?.profile_photo} width="12rem" fit="contain" mr={6} />
          <Box w="100%" mb="10">
            <Heading as="h3" fontSize="3xl" fontWeight={700} color="primary.dark">{doctorProfile?.full_name}</Heading>
            <Heading as="h4" fontSize="xl" fontWeight={400} color="brand.darkPink" mb={3}>{doctorProfile?.qualification_suffix}</Heading>
            <Box color="gray.500" mb={3}>
              No reviews yet.
            </Box>
            <Text fontSize="lg" color="gray.500">
              {doctorProfile?.professional_bio}
            </Text>
            <Flex direction="row">
              <BrandButton>Add Feedback</BrandButton>
              <WhiteButton ml="6">Book Now</WhiteButton>
            </Flex>
          </Box>
          <ProfileTabs />
        </Flex>
        <ProfileRightRow />
      </Flex>
    </SpacedContainer>
  );
}
