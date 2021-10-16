import React from "react";
import { Image, Box } from "@chakra-ui/react";

type PropTypes = {
    image: string;
    text: string;
}

const DoctorSectionCard = ({ image, text }:PropTypes) => (
  <div>
    <Box w="100%" d="flex" flexDir="row" alignItems="center" p="3">
      <Image src={image} w="26%" objectFit="cover" />
      <Box fontSize="md" py="4" px="4" fontWeight="semibold" color="#0a001a">{text}</Box>
    </Box>
  </div>
);

export default DoctorSectionCard;
