import { Box } from "@chakra-ui/react";
import { Room } from "twilio-video";
import { useRecoilValue } from "recoil";
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import MicButton from "./MicButton";
import ScreenShareButton from "./ScreenShareButton";
import authAtom from "../../atoms/auth.atom";

type PropTypes = {
  room: Room,
  setScreenShareStream: React.Dispatch<React.SetStateAction<MediaStream | null>>,
  isScreenSharingActive: boolean,
  setIsScreenSharingActive: React.Dispatch<React.SetStateAction<boolean>>,
};

const ActionButtons = ({
  room, setScreenShareStream, isScreenSharingActive, setIsScreenSharingActive,
}: PropTypes) => {
  const authState = useRecoilValue(authAtom);

  return (
    <Box pos="fixed" bottom="10" left="50%" transform={`translateX(${authState?.user?.userType === "DOCTOR" ? 50 : 0}%)`}>
      <CameraButton room={room} />
      <MicButton room={room} />
      <ScreenShareButton
        room={room}
        setScreenShareStream={setScreenShareStream}
        isScreenSharingActive={isScreenSharingActive}
        setIsScreenSharingActive={setIsScreenSharingActive}
      />
      <LeaveRoomButton room={room} />
    </Box>
  );
};

export default ActionButtons;
