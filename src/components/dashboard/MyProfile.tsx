import {
  Flex, Box, Avatar, Heading, Image,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import authAtom from "../../atoms/auth.atom";
import GreenPlus from "../../static/DoctorDashboardIcons/GreenPlus.png";
import OrangePlus from "../../static/DoctorDashboardIcons/OrangePlus.png";
import YellowPlus from "../../static/DoctorDashboardIcons/YellowPlus.png";

const PlusButtons = () => (
  <>
    <Box
      top="-1.5rem"
      left="-2rem"
      position="absolute"
      p={1}
      cursor="pointer"
      opacity={0.9}
      _hover={{
        opacity: 1,
      }}
    >
      <Image src={GreenPlus} alt="Green Plus" boxSize="0.85rem" />
    </Box>
    <Box
      top="-1.5rem"
      right="-2rem"
      position="absolute"
      p={1}
      cursor="pointer"
      opacity={0.9}
      _hover={{
        opacity: 1,
      }}
    >
      <Image src={GreenPlus} alt="Green Plus" boxSize="0.85rem" />
    </Box>

    <Box
      top="50%"
      left="-4rem"
      transform="translateY(-50%)"
      position="absolute"
      p={1}
      cursor="pointer"
      opacity={0.9}
      _hover={{
        opacity: 1,
      }}
    >
      <Image src={OrangePlus} alt="Green Plus" boxSize="0.85rem" />
    </Box>
    <Box
      top="50%"
      right="-4rem"
      transform="translateY(-50%)"
      position="absolute"
      p={1}
      cursor="pointer"
      opacity={0.9}
      _hover={{
        opacity: 1,
      }}
    >
      <Image src={OrangePlus} alt="Green Plus" boxSize="0.85rem" />
    </Box>

    <Box
      bottom="-1.5rem"
      left="-1rem"
      position="absolute"
      p={1}
      cursor="pointer"
      opacity={0.9}
      _hover={{
        opacity: 1,
      }}
    >
      <Image src={YellowPlus} alt="Green Plus" boxSize="0.85rem" />
    </Box>
    <Box
      bottom="-1.5rem"
      right="-1rem"
      position="absolute"
      p={1}
      cursor="pointer"
      opacity={0.9}
      _hover={{
        opacity: 1,
      }}
    >
      <Image src={YellowPlus} alt="Green Plus" boxSize="0.85rem" />
    </Box>
  </>
);

export default function MyProfile() {
  const authState = useRecoilValue(authAtom);

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100%"
      bg="white"
      rounded="lg"
      boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
    >
      <Heading as="h3" fontSize="2xl" fontWeight="semibold" mb={12}>My Profile</Heading>
      <Box
        p="3px"
        rounded="full"
        w="max-content"
        h="max-content"
        position="relative"
        zIndex={0}
      >
        <Avatar
          p="3px"
          bg="white"
          size="xl"
          name={authState.user?.fullName}
          src={authState.user?.profilePhoto}
        />
        <Box
          position="absolute"
          top="-1px"
          left="-1px"
          h="calc(100% + 2px)"
          w="calc(100% + 2px)"
          rounded="full"
          zIndex={-1}
          bgGradient="linear(to-b, #2D96EB, #1DAE83)"
          clipPath="polygon(0% 0%,50% 0%,50% 100%,0% 100%);"
        />
        <PlusButtons />
      </Box>
    </Flex>
  );
}
