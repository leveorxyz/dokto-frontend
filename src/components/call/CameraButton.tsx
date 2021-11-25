import { useState } from "react";
import { LocalVideoTrackPublication, Room } from "twilio-video";
import { IconButton } from "@chakra-ui/react";
import { IoVideocam, IoVideocamOff } from "react-icons/io5";

type PropTypes = {
  room: Room;
}

const CameraButton = ({ room }: PropTypes) => {
  const [isLocalVideoTrackDisabled, setIsLocalVideoTrackDisabled] = useState(false);

  const startVideo = () => {
    // start sending back video stream to other users
    room.localParticipant.videoTracks.forEach(
      (localVideoTrackPublication: LocalVideoTrackPublication) => {
        localVideoTrackPublication.track.enable();
      },
    );
  };

  const stopVideo = () => {
    // stop sending camera stream to other users
    room.localParticipant.videoTracks.forEach(
      (localVideoTrackPublication: LocalVideoTrackPublication) => {
        if (localVideoTrackPublication.trackName !== "screen-share-track") {
          localVideoTrackPublication.track.disable();
        }
      },
    );
  };

  const handleCameraButtonPressed = () => {
    if (isLocalVideoTrackDisabled) {
      startVideo();
    } else {
      stopVideo();
    }
    setIsLocalVideoTrackDisabled(!isLocalVideoTrackDisabled);
  };

  return (
    <IconButton
      icon={isLocalVideoTrackDisabled ? <IoVideocamOff /> : <IoVideocam />}
      onClick={handleCameraButtonPressed}
      aria-label="camera-enable-disable"
      title="Camera Enable/Disable"
      colorScheme="blackAlpha"
      mx={3}
      rounded="full"
    />
  );
};

export default CameraButton;
