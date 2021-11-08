import { useState } from "react";
import { VideoTrack } from "twilio-video";
import { IconButton } from "@chakra-ui/react";
import { IoVideocam, IoVideocamOff } from "react-icons/io5";

type PropTypes = {
  videoTracks: (VideoTrack | null)[]
}

const CameraButton = ({ videoTracks }: PropTypes) => {
  const [isLocalVideoTrackDisabled, setIsLocalVideoTrackDisabled] = useState(false);

  const startVideo = () => {
    // start sending back video stream to other users
    videoTracks.forEach((localVideoTrackPublication: any) => {
      localVideoTrackPublication.enable();
    });
  };

  const stopVideo = () => {
    // stop sending camera stream to other users
    videoTracks.forEach((localVideoTrackPublication: any) => {
      localVideoTrackPublication.disable();
    });
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
    <div className="video_button_container">
      <IconButton
        icon={isLocalVideoTrackDisabled ? <IoVideocamOff /> : <IoVideocam />}
        onClick={handleCameraButtonPressed}
        aria-label="mute-unmute"
        mx={2}
      />
    </div>
  );
};

export default CameraButton;
