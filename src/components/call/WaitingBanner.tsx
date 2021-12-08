import {
  Flex, Box, Image,
} from "@chakra-ui/react";
import BottomImage from "../../static/waiting_room_frame.png";

type PropTypes = {
  callEnded: boolean;
}

const WaitingBanner = ({ callEnded }:PropTypes) => (
  <Flex minHeight="100vh" w="100%" justifyContent="center" backgroundColor="white">
    <Box paddingTop="8rem" textAlign="center">
      <Flex justifyContent="flex-end" alignItems="center" paddingLeft="5rem" paddingRight="5rem">
        <Image
          rounded="full"
          boxSize="160px"
          src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg"
          alt="Dan Abramov"
          boxShadow="0px 4px 5px 5px rgba(0, 0, 0, 0.09)"
        />
        <Box as="p" fontSize="30px" color="black">
          {callEnded ? "The call has been ended! " : `Welcome to Dr. Jonah Salem's waiting 
        room.Your specialist will see you shortly.`}
        </Box>
      </Flex>
    </Box>
    <Image src={BottomImage} width="40%" position="fixed" bottom="0" />
  </Flex>
);

export default WaitingBanner;
