import { Room } from "twilio-video";
import { useHistory } from "react-router-dom";
import { IconButton } from "@chakra-ui/react";
import { MdCallEnd } from "react-icons/md";

type PropTypes = {
  room: Room
}

const LeaveRoomButton = ({ room }: PropTypes) => {
  const history = useHistory();

  const handleRoomDisconnection = () => {
    room.disconnect();
    history.push("/");
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
