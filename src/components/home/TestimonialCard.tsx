import { Heading, Box, Avatar } from "@chakra-ui/react";
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
      <Box borderWidth={2} p={1} borderColor="purple" rounded="full">
        <Avatar name={title} bg="gray.200" color="gray.700" />
      </Box>
    </Box>

    <Box pl={6}>
      <Heading as="h2" fontWeight="bold" fontSize="2xl" mb={1}>{title}</Heading>
      <Box fontSize="sm" color="gray.500" mb={2}>{patientType}</Box>

      <Box fontSize="md" d="flex" flexDir="row" alignItems="center">
        <Box as={FaStar} color="#ffbf00" />
        <Box ml="2" mr="2" fontWeight="semibold">{rating}</Box>
      </Box>

      <br />
      <Box color="gray">{data}</Box>
    </Box>

  </Box>
);

export default TestimonialCard;
