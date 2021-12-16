import { useState } from "react";
import {
  Heading,
  Box,
  Flex,
  Image,
  Text,
  useDisclosure,
  Divider,
  Modal,
  Checkbox,
  Textarea,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import StarRatingComponent from "react-star-rating-component";
import { SpacedContainer } from "../../components/common/Containers";
import ProfileIcon from "../../static/user.svg";
import ProfileTabs from "../../components/profile/doctor/ProfileTabs";
import WhiteButton from "../../components/common/buttons/WhiteButton";
import doctorProfileAtom from "../../atoms/doctorProfile";
import useProfile from "../../hooks/profile/useProfile";
import LoadingPage from "../../components/common/fallback/LoadingPage";

export default function Profile() {
  const doctorProfile = useRecoilValue(doctorProfileAtom);
  const { isLoading } = useProfile(doctorProfileAtom);
  const [stars, setStars] = useState(5);

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <SpacedContainer pb={10}>
      <Flex alignItems="center" direction="row">
        <Image src={ProfileIcon} position="relative" top="2" right="1" />
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mt="4">Profile</Heading>
      </Flex>
      <Box display="flex" py={8} fontFamily="poppins">
        <Image src={doctorProfile?.profile_photo} width="12rem" fit="contain" mr={6} />
        <Box w="100%" mb="10" d="flex" flexDir="column">
          <Heading as="h3" fontSize="3xl" fontWeight={700} color="primary.dark">{doctorProfile?.full_name}</Heading>
          <Heading as="h4" fontSize="xl" fontWeight={400} color="brand.darkPink" mb={3}>{doctorProfile?.qualification_suffix}</Heading>
          <Box mb="5" d="flex" alignItems="center" borderColor="black">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={4}
              emptyStarColor="#c4c4c4"
              starColor="#ffc107"
            />
            <Box mx="3">4.6</Box>
            <Divider orientation="vertical" h="2rem" />
            <Box mx="3">12 reviews</Box>
          </Box>
          <Box color="rgba(51, 51, 51, .5)" mb={3}>
            {doctorProfile?.review}
          </Box>
          <Text fontSize="lg" color="rgba(51, 51, 51, .5)">
            {doctorProfile?.professional_bio}
          </Text>
          <Box d="flex" flexDir="row" mt="3">
            <Button
              onClick={onOpen}
              color="white"
              px="8"
              fontWeight="normal"
              bgColor="brand.darkPink"
              _hover={{ opacity: ".85" }}
              _focus={{ outline: "none", opacity: ".85" }}
            >
              Add Review
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent bgColor="#FAFAFD" rounded="xl" p="3">
                <ModalHeader>{doctorProfile?.full_name}</ModalHeader>
                <ModalBody>
                  <Flex mb="4">
                    <Box color="rgba(51, 51, 51, 0.5)" mr="4">Posting Publicly</Box>
                    <Checkbox defaultIsChecked>Hide My Name</Checkbox>
                  </Flex>
                  <StarRatingComponent
                    name="rating3"
                    starCount={5}
                    value={stars}
                    onStarClick={(nextValue) => setStars(nextValue)}
                    starColor="#ffc107"
                    emptyStarColor="#c4c4c4"
                  />
                  <Textarea placeholder="Type a Review...." resize="vertical" my="2" />
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="white" color="black" bgColor="#E8E7E9" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    color="white"
                    bgColor="brand.darkPink"
                    _hover={{ opacity: ".85" }}
                    _active={{ opacity: ".85" }}
                    _focus={{ outline: "none", opacity: ".85" }}
                  >
                    Post Review
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <WhiteButton ml="8">Book Now</WhiteButton>
          </Box>
        </Box>
      </Box>
      <ProfileTabs />
    </SpacedContainer>
  );
}
