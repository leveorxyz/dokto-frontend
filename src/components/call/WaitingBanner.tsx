import { Flex, Spinner } from "@chakra-ui/react";

const WaitingBanner = () => (
  <Flex minHeight="100vh" w="100%" justifyContent="center" alignItems="center" backgroundColor="rgba(1,1,1,0.3)">
    <Flex as="p" fontSize="30px" color="white" alignItems="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="brand.darkPink"
        size="xl"
        marginRight="10px"
      />
      <p>Please wait while your doctor let you in!</p>
    </Flex>
  </Flex>
);

export default WaitingBanner;
