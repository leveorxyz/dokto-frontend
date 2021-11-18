import { Box } from "@chakra-ui/react";
import { Room } from "twilio-video";
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import MicButton from "./MicButton";
import ScreenShareButton from "./ScreenShareButton";

type PropTypes = {
  room: Room,
  setScreenShareStream: React.Dispatch<React.SetStateAction<MediaStream | null>>
};

const ActionButtons = ({ room, setScreenShareStream }: PropTypes) => (
  <Box pos="fixed" bottom="10" left="48%">
    <CameraButton room={room} />
    <MicButton room={room} />
    <ScreenShareButton room={room} setScreenShareStream={setScreenShareStream} />
    <LeaveRoomButton room={room} />
  </Box>
);

export default ActionButtons;
