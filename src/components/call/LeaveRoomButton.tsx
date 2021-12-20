import { Room } from "twilio-video";
import { IconButton } from "@chakra-ui/react";
import { MdCallEnd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type PropTypes = {
  room: Room
}

const LeaveRoomButton = ({ room }: PropTypes) => {
  const navigate = useNavigate();
  const handleRoomDisconnection = () => {
    room.localParticipant.videoTracks.forEach((publication) => {
      publication.track.stop();
      const attachedElements = publication.track.detach();
      attachedElements.forEach((element) => element.remove());
    });
    room.localParticipant.audioTracks.forEach((publication) => {
      publication.track.stop();
      const attachedElements = publication.track.detach();
      attachedElements.forEach((element) => element.remove());
    });
    room?.disconnect();
    navigate("/dashboard");
  };

  return (
    <IconButton
      icon={<MdCallEnd color="red" />}
      onClick={handleRoomDisconnection}
      aria-label="end-call"
      title="End Call"
      colorScheme="blackAlpha"
      size="lg"
      mx={3}
      rounded="full"
    />
  );
};

export default LeaveRoomButton;
