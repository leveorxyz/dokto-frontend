import { useState, useMemo } from "react";
import {
  Flex, Box, Text,
} from "@chakra-ui/react";
import BrandButton from "../common/buttons/BrandButton";

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
    <Flex w="100%" backgroundColor="white">
      <Box
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.07)"
        width="60%"
        height="243px"
        marginLeft="5%"
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
      <Box paddingTop="6rem" textAlign="center" />
    </Flex>
  );
};

export default DoctorLanding;
