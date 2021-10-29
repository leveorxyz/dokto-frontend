import {
  Box, Flex, Heading,
} from "@chakra-ui/react";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

const HeaderDescription = () => (
  <div>
    <Flex direction="column">
      <Heading as="h1" fontWeight="bold" fontSize="6xl" mb="30" color="brand.dark">Your Health, Our Happiness</Heading>
      <Box fontSize="md" color="rgba(51, 51, 51, 0.5)" mb="30">
        In the new normal era like now, your health is very important,
        <br />
        especially the Covid-19 cases are increasing every day.
        <br />
        therefore your health, happiness for medical personnel.
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
