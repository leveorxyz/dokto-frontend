import {
  Box, Divider, Heading, Flex, Button, Avatar,
} from "@chakra-ui/react";
import StarRatingComponent from "react-star-rating-component";

const ManageTeamCard = () => (
  <Flex
    direction="row"
    alignItems="center"
    m="3"
    p="4"
    bgColor="white"
    borderRadius="lg"
    fontFamily="poppins"
    _hover={{
      boxShadow: "0 10px 30px 0 rgb(205 204 219 / 25%)",
      filter: "drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))",
    }}
  >
    <Avatar size="2xl" src="" mr="10" />
    <Flex direction="column" w="100%">
      <Heading as="h3" fontSize="2xl" fontWeight={600} color="primary.dark">Jane Smith</Heading>
      <Heading as="h4" fontSize="lg" fontWeight={400} color="brand.darkPink" mb={2}>Qualification Suffix</Heading>
      <Box d="flex" alignItems="center" borderColor="black" mb="3">
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={4}
          emptyStarColor="#c4c4c4"
          starColor="#ffc107"
        />
        <Box mx="3">4.6</Box>
        <Divider orientation="vertical" h="2rem" />
        <Box mx="3">12 reviews</Box>
      </Box>
      <Flex>
        <Button
          mr="4"
          bgColor="red"
          color="white"
          _hover={{
            outline: "none",
            opacity: ".80",
          }}
          _active={{
            outline: "none",
            opacity: ".80",
          }}
          _focus={{
            outline: "none",
            opacity: ".80",
          }}
        >
          Reject User
        </Button>
        <Button
          bgColor="brand.darkPink"
          color="white"
          _hover={{
            outline: "none",
            opacity: ".80",
          }}
          _active={{
            outline: "none",
            opacity: ".80",
          }}
          _focus={{
            outline: "none",
            opacity: ".80",
          }}
        >
          View Details
        </Button>
      </Flex>
    </Flex>
  </Flex>
);

export default ManageTeamCard;
