import React from "react";
import {
  Box, Heading, Divider, Flex,
} from "@chakra-ui/react";
import { IoLocationOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Profile from "../../static/home/profile.jpg";
import ArrowButton from "../common/buttons/ArrowButton";

const facts = [
  {
    id: "location",
    Icon: IoLocationOutline,
    title: (
      <>
        &nbsp;
        New York,NY
      </>
    ),
  },
  {
    id: "star",
    Icon: FaStar,
    title: (
      <>
        &nbsp;
        <b>4.85</b>
        &nbsp;
        1751 reviews
      </>
    ),
  },
];

const OurDoctorsCard = () => (
  <div>
    <Box w="100%">
      <Flex direction="column">
        <Box w="100%" bgImage={Profile} bgPosition="center" bgSize="cover" bgRepeat="no-repeat" color="white" borderColor="white">
          <Box mt="120" pb="2" px="2">
            <Divider />
            <Heading fontSize="lg" as="h3" fontWeight="semibold" pt="2">Dr. Rita Ora, MD</Heading>
            <Box fontSize="md">Primary Care Doctor</Box>
          </Box>
        </Box>
        <Box>
          {facts.map(({ id, Icon, title }) => (
            <Box key={id} d="flex" flexDir="row">
              <Box>{Icon}</Box>
              {title}
            </Box>
          ))}
        </Box>
        <ArrowButton bgColor="purple" iconColor="white">View Profile</ArrowButton>
      </Flex>
    </Box>
  </div>
);

export default OurDoctorsCard;
