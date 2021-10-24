import {
  Heading, Box, Avatar, Link,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

type PropTypes = {
  title: string;
  data: string;
  rating: string;
  patientType: string;
};

const TestimonialCard = ({
  title, data, rating, patientType,
}: PropTypes) => (
  <Box
    bg="white"
    d="flex"
    flexDir="row"
    mb="2"
    p="10"
    height="100%"
    maxW="100%"
    borderRadius="2xl"
  >

    <Box>
      <Box borderWidth={2} p={1} borderColor="#A42BAD" rounded="full">
        <Avatar name={title} bg="gray.200" color="gray.700" />
      </Box>
    </Box>

    <Box pl={6}>
      <Heading as="h2" fontWeight="bold" fontSize="2xl" mb={1} color="#333333">{title}</Heading>
      <Box fontSize="sm" color="rgba(51, 51, 51, 0.6)" mb={2}>{patientType}</Box>

      <Box fontSize="md" d="flex" flexDir="row" alignItems="center">
        <Box as={FaStar} color="#3DE0FF" />
        <Box ml="2" mr="2" fontWeight="semibold">{rating}</Box>
      </Box>

      <br />
      <Box color="rgba(51, 51, 51, 0.6)">{data}</Box>
      <Link href="/" color="#3DE0FF" _hover={{ outline: "none" }}>Read more</Link>
    </Box>

  </Box>
);

export default TestimonialCard;
