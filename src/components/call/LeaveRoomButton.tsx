import { Room } from "twilio-video";
import { IconButton } from "@chakra-ui/react";
import { MdCallEnd } from "react-icons/md";

type PropTypes = {
  room: Room
}

const LeaveRoomButton = ({ room }: PropTypes) => {
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
