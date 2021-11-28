import {
  Flex, Spinner, Box, Icon,
} from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";

type PropTypes = {
  callEnded: boolean;
}

const WaitingBanner = ({ callEnded }:PropTypes) => (
  <Flex minHeight="100vh" w="100%" justifyContent="center" alignItems="center" backgroundColor="rgba(1,1,1,0.3)">
    <Flex as="p" fontSize="40px" color="white" alignItems="center">
      {callEnded ? <Icon as={FaInfoCircle} color="purple" marginRight="10px" /> : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="brand.darkPink"
          size="xl"
          marginRight="10px"
        />
      )}
      <Box as="p" color="black">{callEnded ? "The call has been ended! " : "Please wait while your doctor lets you in!"}</Box>
    </Flex>
  </Flex>
);

export default WaitingBanner;
