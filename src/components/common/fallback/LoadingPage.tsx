import { Flex, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
      width="100%"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="brand.darkPink"
        size="xl"
      />
    </Flex>
  );
}
