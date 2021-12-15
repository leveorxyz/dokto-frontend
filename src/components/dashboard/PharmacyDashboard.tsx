import {
  Flex, Box, Heading, Image, Text, chakra,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";

import { SpacedContainer } from "../common/Containers";
import authAtom from "../../atoms/auth.atom";

import Banner from "../../static/PharmacyDashboard/Banner.png";
import Meds from "../../static/PharmacyDashboard/Meds.png";
import Chat from "../../static/PharmacyDashboard/Chat.png";
import Admin from "../../static/PharmacyDashboard/Admin.png";

export default function PharmacyDashboard() {
  const authState = useRecoilValue(authAtom);
  return (
    <SpacedContainer mx={4}>
      <Heading as="h2" py="4" color="#11142D" fontSize="2xl" fontWeight="semibold">Dashboard</Heading>
      <Flex minH="80vh">
        <Box w="70%">
          <Flex
            minH="10rem"
            bg="white"
            rounded="lg"
            p={6}
            mr={6}
            my={6}
            position="relative"
            boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
            _hover={{
              filter: "drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))",
            }}
          >
            <Image
              src={Meds}
              height="115%"
              w="auto"
              fit="contain"
              position="absolute"
              bottom={0}
              left={0}
            />
            <Text fontSize="xl" fontWeight="bold" ml={48}>
              Welcome to your dashoard
              {", "}
              <chakra.span color="brand.darkPink">
                {authState.user?.fullName}
              </chakra.span>
            </Text>
          </Flex>

          <Flex
            minH="10rem"
            bg="rgba(194, 202, 206, 0.27)"
            rounded="lg"
            p={6}
            mr={6}
            my={6}
            boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
            _hover={{
              filter: "drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))",
            }}
          >
            <Image
              src={Chat}
              height="100%"
              w="auto"
              fit="contain"
            />
            <Text fontSize="xl" fontWeight="bold" ml={8}>
              You have
              {" "}
              <chakra.span color="brand.darkPink">
                {5}
              </chakra.span>
              {" "}
              unread messages
            </Text>
          </Flex>

          <Flex
            minH="10rem"
            bg="rgba(61, 224, 255, 0.2)"
            rounded="lg"
            p={6}
            mr={6}
            my={6}
            boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
            _hover={{
              filter: "drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))",
            }}
          >
            <Image
              src={Admin}
              height="100%"
              w="auto"
              fit="contain"
            />
            <Text fontSize="xl" fontWeight="bold" ml={8}>
              No messages from admin
            </Text>
          </Flex>
        </Box>

        <Flex w="30%" justifyContent="center" alignItems="center">
          <Image src={Banner} w="100%" h="auto" />
        </Flex>
      </Flex>
    </SpacedContainer>
  );
}
