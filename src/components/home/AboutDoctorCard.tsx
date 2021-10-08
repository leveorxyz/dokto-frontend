import React from "react";
import { Image, Box, Divider } from "@chakra-ui/react";

type PropTypes = {
    image: string;
    text: string;
}

const AboutDoctorCard = ({ image, text }:PropTypes) => (
  <div>
    <Box w="100%" cursor="pointer" height="100%" d="flex" flexDir="column" borderColor="#00ffff">
      <Image src={image} pos="relative" width="100%" height="67%" objectFit="cover" border="1px" borderColor="#e6e6e6" />
      <Box width="100%" height="31%" fontSize="x-large" py="4" fontWeight="semibold">{text}</Box>
      <Divider />
    </Box>
  </div>
);

export default AboutDoctorCard;
