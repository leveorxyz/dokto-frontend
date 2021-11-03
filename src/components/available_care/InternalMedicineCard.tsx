import { Avatar, Box } from "@chakra-ui/react";

type PropTypes = {
  title: string;
  data: string;
};

const InternalMedicineCard = ({ title, data }: PropTypes) => (

  <Box
    bg="white"
    d="flex"
    p="10"
    minH="28rem"
    flexDir="column"
    maxW="100%"
    borderRadius="2xl"
  >
    <Box
      d="flex"
      flexDir="row"
      alignItems="center"
      mb="2"
    >
      <Box borderWidth={2} p={1} borderColor="#A42BAD" rounded="full">
        <Avatar name={title} bg="gray.200" color="primary.dark" />
      </Box>
      <Box as="h3" ml="2" fontSize="lg" fontWeight="semibold" color="primary.dark">
        {title}
      </Box>
    </Box>
    <Box color="rgba(51, 51, 51, 0.6)" mt={4}>{data}</Box>
  </Box>
);

export default InternalMedicineCard;
