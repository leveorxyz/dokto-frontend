import {
  Box, Heading, Link, Image,
} from "@chakra-ui/react";
import React from "react";
import { IconContext } from "react-icons";
import { FaRegCalendar } from "react-icons/fa";

type PropTypes = {
    image: string;
}

const PostsDoctorCard = ({ image }:PropTypes) => (
  <div>
    <Box w="100%" cursor="pointer" border="1px" borderColor="#e6e6e6" height="100%" d="flex" flexDir="column">
      <Image src={image} pos="relative" width="100%" height="50%" objectFit="cover" />
      <Box p="4" d="flex" flexWrap="wrap" flexDir="column">
        <Heading fontSize="lg" as="h3">Lorem ipsum dolor sit amet</Heading>
        <Box fontSize="md" color="gray">By Dr. Roger Moore</Box>
        <Box d="flex" flexDir="row" my="2">
          <IconContext.Provider value={{ color: "#e600e6" }}>
            <FaRegCalendar size={25} />
          </IconContext.Provider>
          <Box ml="1" fontSize="md" fontWeight="bold">10 Sept. 2021</Box>
        </Box>
        <Box fontSize="md" color="gray" my="1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aliquam quam lectus, gravida a convallis varius,suscipit quis nunc.
          Nunc vel urna auctor, blandit velit non,pellentesque leo.
          Vestibulum tempus nibh nec...
        </Box>
        <Box>
          <Link
            href="/"
            fontSize="md"
            fontWeight="bold"
            color="#00ffff"
            _hover={{ textDecoration: "none" }}
            pb="4"
          >
            Read more...
          </Link>
        </Box>
      </Box>
    </Box>
  </div>
);

export default PostsDoctorCard;
