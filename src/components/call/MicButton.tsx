import { useState } from "react";
import { AudioTrack } from "twilio-video";
import { IconButton } from "@chakra-ui/react";
import { IoMic, IoMicOff } from "react-icons/io5";

type PropTypes = {
  audioTracks: (AudioTrack | null)[]
}

const MicButton = ({ audioTracks }: PropTypes) => {
  const [isMicMuted, setIsMicMuted] = useState(false);

  const mute = () => {
    // mute our microphone so other users will be not able to hear us
    audioTracks.forEach((localAudioTrackPublication:any) => {
      localAudioTrackPublication.disable();
    });
  };

  const unmute = () => {
    // turn on mic back
    audioTracks.forEach((localAudioTrackPublication:any) => {
      localAudioTrackPublication.enable();
    });
  };

  const handleMicButtonPressed = () => {
    if (isMicMuted) {
      unmute();
    } else {
      mute();
    }
    setIsMicMuted((prev) => !prev);
  };

  return (
    <div className="video_button_container">
      <IconButton
        icon={isMicMuted ? <IoMicOff /> : <IoMic />}
        onClick={handleMicButtonPressed}
        aria-label="mute-unmute"
        title="Mute/Unmute"
        mx={2}
      />
    </div>
  );
};

export default MicButton;
