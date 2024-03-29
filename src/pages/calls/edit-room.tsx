import { useState } from "react";
import {
  Box, Text, Flex,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import RoomPreview from "../../components/call/edit-room/RoomPreview";
import useCustomizeRoom from "../../hooks/calls/useCustomizeRoom";
import MessageInput from "../../components/call/edit-room/MessageInput";
import FileInput from "../../components/call/edit-room/FileInput";
import BacktoDashboard from "../../components/call/edit-room/BacktoDashboard";
import authAtom from "../../atoms/auth.atom";
import WhiteButton from "../../components/common/buttons/WhiteButton";
import EditIcons from "../../components/call/edit-room/EditIcons";

const EditRoom = () => {
  const authState = useRecoilValue(authAtom);
  const [showInput, setShowInput] = useState<""|"image"|"text"|"video">("");
  const [text, setText] = useState<string>("");
  const [media, setMedia] = useState<File>();

  const {
    mutate,
    isLoading,
  } = useCustomizeRoom();

  const clearMedia = () => {
    setMedia(undefined);
    setText("");
  };

  const hideInput = () => {
    setShowInput("");
  };

  const handleSetDefault = () => {
    mutate({ text: "", room_media: null, room_media_mime_type: null });
    clearMedia();
    hideInput();
  };

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
          <Text fontSize="25px">{`Waiting Room of ${authState?.user?.fullName}`}</Text>
          <Text color="#9A9AB0" size="18px" marginTop="5px">Customize your Waiting Room</Text>
          <Flex marginTop="45px" justifyContent="flex-end" alignItems="center">
            <WhiteButton onClick={handleSetDefault} isLoading={isLoading}>
              Revert to Default
            </WhiteButton>
            {/* <Box marginLeft={5}>
              <WhiteButton onClick={() => setPreviewRoom((prev) => !prev)}>
                Preview Waiting Room
              </WhiteButton>
            </Box> */}
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
            <Box textAlign="center" cursor="pointer" onClick={() => setShowInput("image")}>
              <EditIcons.VideoIcon />
              <Text fontSize="20px" marginTop="10px">Video</Text>
            </Box>
          </Flex>
        </Box>
        )}

        {showInput === "text" && <MessageInput handleClose={hideInput} setText={setText} clearMedia={clearMedia} />}
        {showInput === "image" && <FileInput handleClose={hideInput} setMedia={setMedia} clearMedia={clearMedia} />}

        <RoomPreview text={text} mediaFile={media} />
      </Box>
    </div>
  );
};

export default EditRoom;
