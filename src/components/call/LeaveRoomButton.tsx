import { Room } from "twilio-video";
import { IconButton } from "@chakra-ui/react";
import { MdCallEnd } from "react-icons/md";

type PropTypes = {
  room: Room
}

const LeaveRoomButton = ({ room }: PropTypes) => {
  const handleRoomDisconnection = () => {
    room.disconnect();

    window.location.href = "/";
  };

  return (
    <div className="video_button_container">
      <IconButton
        icon={<MdCallEnd color="red" />}
        onClick={handleRoomDisconnection}
        aria-label="end-call"
        title="End Call"
        mx={2}
      />
    </div>
  );
};

export default LeaveRoomButton;
