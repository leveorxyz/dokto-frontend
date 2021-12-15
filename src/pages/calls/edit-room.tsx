import { useState } from "react";
import {
  Box, Text, Flex,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import MessageInput from "../../components/call/edit-room/MessageInput";
import FileInput from "../../components/call/edit-room/FileInput";
import BacktoDashboard from "../../components/call/edit-room/BacktoDashboard";
import authAtom from "../../atoms/auth.atom";
import BrandButton from "../../components/common/buttons/BrandButton";
import WhiteButton from "../../components/common/buttons/WhiteButton";
import EditIcons from "../../components/call/edit-room/EditIcons";

const EditRoom = () => {
  const authState = useRecoilValue(authAtom);
  const [showInput, setShowInput] = useState<""|"image"|"text"|"video">("");

  const hideInput = () => setShowInput("");

  return (
    <div>
      <Box w="100%" paddingLeft="5%" paddingTop="35px" paddingBottom="35px">
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
        {!showInput && (
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
            <Box textAlign="center" cursor="pointer" onClick={() => setShowInput("text")}>
              <EditIcons.TextIcon />
              <Text fontSize="20px" marginTop="10px">Text</Text>
            </Box>
            <Box textAlign="center" cursor="pointer" onClick={() => setShowInput("image")}>
              <EditIcons.ImageIcon />
              <Text fontSize="20px" marginTop="10px">Image</Text>
            </Box>
            <Box textAlign="center" cursor="pointer" onClick={() => setShowInput("video")}>
              <EditIcons.VideoIcon />
              <Text fontSize="20px" marginTop="10px">Video</Text>
            </Box>
          </Flex>
        </Box>
        )}
        {showInput === "text" && <MessageInput handleClose={hideInput} />}
        {showInput === "image" && <FileInput handleClose={hideInput} />}
      </Box>
    </div>
  );
};

export default EditRoom;
