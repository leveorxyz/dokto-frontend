import {
  Heading,
  Box,
  Avatar,
  Text,
} from "@chakra-ui/react";

type PropTypes = {
  title: string;
  data: string;
};

const TestimonialCard = ({
  title, data,
}: PropTypes) => (
  <Box
    bg="white"
    d="flex"
    flexDir="row"
    mb="2"
    p="10"
    minHeight="30rem"
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
      {/* <Box fontSize="sm" color="rgba(51, 51, 51, 0.6)" mb={2}>{patientType}</Box> */}
      <br />

      <Text color="gray.500" fontSize="lg" maxW="25rem">{data}</Text>
    </Box>

  </Box>
);

export default TestimonialCard;
