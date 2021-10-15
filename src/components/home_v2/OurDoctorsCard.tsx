import React from "react";
import {
  Box, Heading, Divider, Flex,
} from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import Profile from "../../static/home/profile.jpg";
import ArrowButton from "../common/buttons/ArrowButton";

const OurDoctorsCard = () => (
  <div>
    <Box w="100%">
      <Flex direction="column">
        <Box w="100%" bgImage={Profile} bgPosition="center" bgSize="cover" bgRepeat="no-repeat" color="white" borderColor="white">
          <Box mt="120" pb="2" pt="1" px="2" bgColor="rgba(0,0,0, 0.4)">
            <Divider />
            <Heading fontSize="lg" as="h3" fontWeight="semibold" pt="2">Dr. Rita Ora, MD</Heading>
            <Box fontSize="md">Primary Care Doctor</Box>
          </Box>
        </Box>
        <Box mt="5">
          <Box fontSize="md" d="flex" flexDir="row" alignItems="center">
            <IconContext.Provider value={{ color: "#00ffff" }}>
              <IoLocationOutline size={20} />
            </IconContext.Provider>
            <Box ml="2">New York,NY</Box>
          </Box>
          <Box fontSize="md" d="flex" flexDir="row" alignItems="center">
            <IconContext.Provider value={{ color: "#ffbf00" }}>
              <FaStar />
            </IconContext.Provider>
            <Box ml="2" mr="2" fontWeight="semibold">4.85</Box>
            <Box>1751 reviews</Box>
          </Box>
        </Box>
        <ArrowButton bgColor="purple" iconColor="white">View Profile</ArrowButton>
      </Flex>
    </Box>
  </div>
);

export default OurDoctorsCard;
