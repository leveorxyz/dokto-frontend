import { useState } from "react";
import { LocalAudioTrackPublication, Room } from "twilio-video";
import { IconButton } from "@chakra-ui/react";
import { IoMic, IoMicOff } from "react-icons/io5";

type PropTypes = {
  room: Room
}

const MicButton = ({ room }: PropTypes) => {
  const [isMicMuted, setIsMicMuted] = useState(false);

  const mute = () => {
    // mute our microphone so other users will be not able to hear us
    room.localParticipant.audioTracks.forEach(
      (localAudioTrackPublication: LocalAudioTrackPublication) => {
        localAudioTrackPublication.track.disable();
      },
    );
  };

  const unmute = () => {
    // turn on mic back
    room.localParticipant.audioTracks.forEach(
      (localAudioTrackPublication: LocalAudioTrackPublication) => {
        localAudioTrackPublication.track.enable();
      },
    );
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
    <IconButton
      icon={isMicMuted ? <IoMicOff /> : <IoMic />}
      onClick={handleMicButtonPressed}
      aria-label="mute-unmute"
      title="Mute/Unmute"
      colorScheme="blackAlpha"
      size="lg"
      mx={3}
      rounded="full"
    />
  );
};

export default MicButton;
