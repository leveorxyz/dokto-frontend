import { useState, useMemo } from "react";
import {
  Flex, Box, Text, Image,
} from "@chakra-ui/react";
import BrandButton from "../common/buttons/BrandButton";
import ConsultingImage from "../../static/doctor-consulting.svg";
import EditRoom from "../../static/waiting-room.svg";

type PropTypes = {
  roomName: string;
  userName: string|undefined;
}

const DoctorLanding = ({ roomName, userName }:PropTypes) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const roomURL = useMemo(() => `${window.location.origin}/calls?doctor=${userName}`, [userName]);

  /**
   * Clipboard copy handler
   */
  const handleCopy = () => {
    clearTimeout(2000);
    navigator.clipboard.writeText(roomURL);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <Box w="100%" backgroundColor="white" paddingLeft="5%">
      <Box
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.07)"
        width="60%"
        height="243px"
        marginTop="50px"
        borderRadius="10px"
        border="1px solid #dddddd"
        padding="50px"
        paddingLeft="25px"
        paddingRight="25px"
      >
        <Text fontSize="25px">{`Welcome, ${roomName}`}</Text>
        <Flex marginTop="45px" width="100%">
          <Box backgroundColor="#F6F6F7" padding="15px" width="60%" borderRadius="8px" marginRight="25px">
            {roomURL}
          </Box>
          <BrandButton onClick={handleCopy}>
            <Text width="100px" fontSize="18px">{copySuccess ? "Copied" : "Copy"}</Text>
          </BrandButton>
        </Flex>
      </Box>
      <Box width="60%" marginTop="30px">
        <Flex justifyContent="space-between">
          <Box
            width="60%"
            height="243px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.07)"
            border="1px solid #dddddd"
            borderRadius="10px"
            textAlign="center"
            cursor="pointer"
            _hover={{ backgroundColor: "#81F9EC" }}
          >
            <Image src={ConsultingImage} margin="0 auto" />
            <Text fontSize="20px" fontWeight="500">Enter Your Consulting Room</Text>
          </Box>
          <Box
            width="35%"
            height="243px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.07)"
            border="1px solid #dddddd"
            borderRadius="10px"
            marginLeft="10px"
            textAlign="center"
            paddingTop="3.5rem"
            cursor="pointer"
            _hover={{ backgroundColor: "#A42BAD" }}
          >
            <Image src={EditRoom} margin="0 auto" marginTop="10%" />
            <Text fontSize="20px" fontWeight="500" marginTop="10px">Edit Waiting Room</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default DoctorLanding;
