import {
  Box,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

import DoktoIcon from "../../static/Dokto.png";
import authAtom from "../../atoms/auth.atom";

export default function DashboardTopBar() {
  const authState = useRecoilValue(authAtom);

  return (
    <Box
      w="100%"
      h="4rem"
      bgColor="primary.light"
      position="fixed"
      top={0}
      left={0}
      opacity={1}
      zIndex={999}
    >
      <Flex h="100%" alignItems="center" wrap="nowrap">
        <Link to="/">
          <Flex bgColor="primary.dark" justifyContent="center" width="15rem">
            <Image
              src={DoktoIcon}
              height="4rem"
              width="auto"
              fit="contain"
              p={2}
            />
          </Flex>
        </Link>
        <Flex flexGrow={1} justifyContent="flex-end" alignItems="center" mx={6}>
          <Flex
            minW="15rem"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            px={8}
            rounded="md"
            bg="rgba(255,255,255,0.3)"
            _hover={{ bg: "rgba(255,255,255,0.5)" }}
          >
            <Image
              src={authState.user?.profilePhoto}
              boxSize="3rem"
              rounded="full"
              fit="cover"
              mr={3}
            />
            <Box>
              <Text fontWeight={600} fontSize="lg">{authState.user?.fullName}</Text>
              <Text fontSize="md">{authState.user?.email}</Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
