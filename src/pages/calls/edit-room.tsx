import { useState } from "react";
import {
  Box, Text, Flex,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import MessageInput from "../../components/call/edit-room/MessageInput";
import BacktoDashboard from "../../components/call/edit-room/BacktoDashboard";
import authAtom from "../../atoms/auth.atom";
import BrandButton from "../../components/common/buttons/BrandButton";
import WhiteButton from "../../components/common/buttons/WhiteButton";
import EditIcons from "../../components/call/edit-room/EditIcons";

const EditRoom = () => {
  const authState = useRecoilValue(authAtom);
  const [showTextInput, setShowTextInput] = useState<boolean>(false);

  // hide message input
  const hideMessageInput = () => setShowTextInput(false);

  return (
    <div>
      <Box w="100%" paddingLeft="5%" paddingTop="35px">
        <BacktoDashboard />

        <Box
          backgroundColor="#fff"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.07)"
          width="60%"
          height="243px"
          marginTop="15px"
          borderRadius="10px"
          border="1px solid #dddddd"
          padding="50px"
          paddingLeft="25px"
          paddingRight="25px"
        >
          <Text fontSize="25px">{`Waiting Rooms of ${authState?.user?.fullName}`}</Text>
          <Text color="#9A9AB0" size="18px" marginTop="5px">Customize your Waiting Rooms</Text>
          <Flex marginTop="45px" justifyContent="flex-end" alignItems="center">
            <Box marginRight="20px">
              <WhiteButton>
                Revert to Default
              </WhiteButton>
            </Box>
            <BrandButton width="100px">
              Save
            </BrandButton>
          </Flex>
        </Box>
        <Box
          backgroundColor="#fff"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.07)"
          width="60%"
          height="243px"
          marginTop="15px"
          borderRadius="10px"
          border="1px solid #dddddd"
          padding="50px"
          paddingLeft="25px"
          paddingRight="25px"
        >
          <Flex justifyContent="space-around" alignItems="center">
            <Box textAlign="center" cursor="pointer" onClick={() => setShowTextInput(true)}>
              <EditIcons.TextIcon />
              <Text fontSize="20px" marginTop="10px">Text</Text>
            </Box>
            <Box textAlign="center" cursor="pointer">
              <EditIcons.ImageIcon />
              <Text fontSize="20px" marginTop="10px">Image</Text>
            </Box>
            <Box textAlign="center" cursor="pointer">
              <EditIcons.VideoIcon />
              <Text fontSize="20px" marginTop="10px">Video</Text>
            </Box>
          </Flex>
        </Box>
        {showTextInput && <MessageInput handleClose={hideMessageInput} />}
      </Box>
    </div>
  );
};

export default EditRoom;
