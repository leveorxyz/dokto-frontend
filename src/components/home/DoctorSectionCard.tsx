import React from "react";
import { Image, Box } from "@chakra-ui/react";

type PropTypes = {
    image: string;
    text: string;
}

const DoctorSectionCard = ({ image, text }:PropTypes) => (
  <Box w="100%" d="flex" flexDir={["column", "column", "row", "row"]} alignItems="center" p="3">
    <Image src={image} w={["100%", "100%", "25%", "25%"]} objectFit="cover" />
    <Box fontSize="md" py={4} px={[0, 0, 4, 4, 4]} fontWeight="semibold" color="#170041">{text}</Box>
  </Box>
);

export default DoctorSectionCard;
