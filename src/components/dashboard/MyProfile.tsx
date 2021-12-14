import {
  Flex, Box, Avatar, Heading,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import authAtom from "../../atoms/auth.atom";

export default function MyProfile() {
  const authState = useRecoilValue(authAtom);

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      p={12}
      bg="white"
      rounded="lg"
      boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
    >
      <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={6}>My Profile</Heading>
      <Box p="3px" bgGradient="linear(45deg, #2D96EB, #1DAE83)" rounded="full" w="max-content" h="max-content">
        <Avatar
          p="3px"
          bg="white"
          size="xl"
          name={authState.user?.fullName}
          src={authState.user?.profilePhoto}
        />
      </Box>
    </Flex>
  );
}
