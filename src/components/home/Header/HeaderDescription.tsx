import {
  Box, Flex, Heading,
} from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

const HeaderDescription = () => (
  <div>
    <Flex direction="column">
      <Heading as="h1" fontWeight={800} fontSize="7xl" mb="30" color="brand.dark">Your Health, Our Commitment</Heading>
      <Box as="h3" fontSize="lg" fontWeight="400" color="gray.500" mb="30" maxWidth="35rem">
        Get instant access to a physician at any time,
        anywhere in the world. We prioritize your care
        and healthcare needs to get you feeling better
        as quickly as possible.
      </Box>
      <Flex direction="row" alignItems="center">
        <Box as="button" mr="4" bgColor="#A42BAD" color="white" rounded="full" py=".5rem" px="3rem" textTransform="uppercase" _hover={{ opacity: ".9" }} _active={{ opacity: ".9" }} d="flex" flexDir="column" alignItems="baseline">
          <Box fontSize="sm" fontWeight="bold">Talk to a</Box>
          <Box fontSize="lg" fontWeight="bold">Doctor online</Box>
        </Box>
        <IconContext.Provider value={{ color: "#14FF00" }}><FaCircle /></IconContext.Provider>
        <Box ml="2" color="#170041">3560 Doctors Online</Box>
      </Flex>
    </Flex>
  </div>
);

export default HeaderDescription;
