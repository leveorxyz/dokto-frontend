import React from "react";
import {
  Box, Flex, Text, Image, Heading,
} from "@chakra-ui/react";
import BrandButton from "../../common/buttons/BrandButton";

type PropTypes = {
  image: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
}

const ProfileSideCard = ({ image, title, description }: PropTypes) => (
  <div>
    <Box
      w="100%"
      p={8}
      height="100%"
      borderRadius="20"
      _hover={{ bg: "white", boxShadow: "0 10px 30px 0 rgb(205 204 219 / 25%)" }}
      cursor="pointer"
    >
      <Flex direction="column" px="1" alignItems="center">
        <Image src={image} w="max-content" />
        <Heading
          fontSize="3xl"
          px={[0, 0, 6, 6, 6]}
          py={4}
          fontWeight="semibold"
          color="brand.darkPink"
          textTransform="capitalize"
        >
          {title}
        </Heading>
        <Text fontSize="lg" color="gray.500" textAlign="center" px="14" mb="4">
          {description}
        </Text>
        <BrandButton w="70%">Read More</BrandButton>
      </Flex>
    </Box>
  </div>
);

export default ProfileSideCard;
