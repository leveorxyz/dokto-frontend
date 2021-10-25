import { Avatar, Box } from "@chakra-ui/react";

type PropTypes = {
  title: string;
  data: string;
};

const InternalMedicineCard = ({ title, data }: PropTypes) => (
  <div>
    <Box
      bg="white"
      d="flex"
      p="10"
      height="100%"
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
          <Avatar name={title} bg="gray.200" color="gray.700" />
        </Box>
      </Box>
      <Box color="rgba(51, 51, 51, 0.6)">{data}</Box>
    </Box>
  </div>
);

export default InternalMedicineCard;
